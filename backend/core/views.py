from django.views import View
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
from .models import Seller, Customer

@method_decorator(csrf_exempt, name='dispatch')
class SellerLoginView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)
            user = data.get('user', '').strip()
            password = data.get('password', '').strip()

            print("Usuario recibido:", user)
            print("Contraseña recibida:", password)

            seller = Seller.objects.get(user=user)

            if seller.password == password:
                return JsonResponse({'redirect': 'http://localhost:3000/seller-index', 'first_name': seller.first_name, 'seller_id': seller.id})
            else:
                return JsonResponse({'error': 'Contraseña incorrecta'}, status=401)

        except Seller.DoesNotExist:
            return JsonResponse({'error': 'Usuario no encontrado'}, status=404)

        except Exception as e:
            print("Error inesperado:", e)
            return JsonResponse({'error': 'Error interno'}, status=500)
        

@method_decorator(csrf_exempt, name='dispatch')
class CustomerLoginView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)
            email = data.get('email', '').strip()
            password = data.get('password', '').strip()

            print("Mail recibido:", email)
            print("Contraseña recibida:", password)

            customer = Customer.objects.get(email=email)

            if customer.password == password:
                return JsonResponse({'redirect': 'http://localhost:3000/customer-index', 'first_name': customer.first_name, 'customer_id': customer.id})
            else:
                return JsonResponse({'error': 'Contraseña incorrecta'}, status=401)

        except Customer.DoesNotExist:
            return JsonResponse({'error': 'Usuario no encontrado'}, status=404)

        except Exception as e:
            print("Error inesperado:", e)
            return JsonResponse({'error': 'Error interno'}, status=500)