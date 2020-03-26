from django.shortcuts import render
from django.http.response import JsonResponse

from api.models import Product, Category


# Create your views here.

def product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    return JsonResponse(product.to_json())


def categories_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)


def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    return JsonResponse(category.to_json())


def get_products_by_category(request, category_id):
    try:
        products_by_cat = [x.to_json() for x in Product.objects.filter(category_id=Category.objects.get(id=category_id))]
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    return JsonResponse(products_by_cat, safe=False)