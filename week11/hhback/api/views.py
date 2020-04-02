from django.shortcuts import render
from django.http.response import JsonResponse

from api.models import Company, Vacancy


# Create your views here.

def companies_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    return JsonResponse(company.to_json())


def get_vacancies_by_company(request, company_id):
    try:
        vacancies_by_company = [x.to_json() for x in
                                Vacancy.objects.filter(company=Company.objects.get(id=company_id))]
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    return JsonResponse(vacancies_by_company, safe=False)


def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    return JsonResponse(vacancy.to_json())


def top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')
    vacancies_json=[vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json[:10], safe=False)
