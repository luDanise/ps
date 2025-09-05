from django.contrib import admin
from django.urls import path
from core.views import SellerLoginView, CustomerLoginView, CustomerSignupView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/seller-login/', SellerLoginView.as_view(), name='seller-login'),
    path('api/customer-login/', CustomerLoginView.as_view(), name='customer-login'),
    path('api/customer-signup/', CustomerSignupView.as_view(), name='customer-signup'),
]