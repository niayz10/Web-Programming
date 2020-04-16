from django.urls import path

from api.views import companies_list, company_detail, get_vacancies_by_company, vacancies_list, vacancy_detail, top_ten, \
    company_flt, vacancies_flt

urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:company_id>/', company_detail),
    path('companies/<int:company_id>/vacancies/', get_vacancies_by_company),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:vacancy_id>/', vacancy_detail),
    path('vacancies/top_ten/', top_ten),
    path('companies/sta/', company_flt),
    path('vacancies/gte/', vacancies_flt)
]