from django.urls import path

from api.views.views import companies_list, company_detail, get_vacancies_by_company

from api.views.views_cbv import VacancyListAPIView, VacancyDetailAPIView
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [

    path('login/', obtain_jwt_token),
    path('companies/', companies_list),
    path('companies/<int:company_id>/', company_detail),
    path('companies/<int:company_id>/vacancies/', get_vacancies_by_company),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:vacancy_id>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', VacancyListAPIView.top_ten),
]