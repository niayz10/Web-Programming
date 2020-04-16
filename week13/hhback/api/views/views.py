from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


# Create your views here.


@api_view(['GET', 'POST'])
def companies_list(request):

    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, company_id):

    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    elif request.method == 'PUT':

        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        company.delete()
        return Response({'deleted': True})


@api_view(['GET', 'POST'])
def get_vacancies_by_company(request, company_id):
    try:
        vacancies_by_company = Vacancy.objects.filter(company=Company.objects.get(id=company_id))
    except Company.DoesNotExist as e:
        return Response({'error': str(e)})
    if request.method == "GET":
        serializer = VacancySerializer(data=vacancies_by_company, many=True)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)


