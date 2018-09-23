import csv

import random

import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

from wfb.models import PlaceModel, CategoryModel


def parse(csv_row):
    return {
        "name": csv_row['Name'],
        "category": csv_row['category'],
        "lat": csv_row['Latitude'],
        "lon": csv_row['Longitude'],
        "address": csv_row['Address'],
        "email": csv_row['Email'],
        "description": csv_row['Description'],
        "website": csv_row['Website'],
        "phone": csv_row['Phone'],
        "image_url": csv_row["image_url"],
        "min_age": int(random.uniform(12, 14)),
        "max_age": int(random.uniform(15, 18)),
    }

PlaceModel.objects.filter(category__label='food').delete()

with open('food_data.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            print(f'Column names are {", ".join(row)}')
            line_count += 1

        place_data = parse(row)

        # ensure this label exists
        category_label = place_data['category']
        current_category, created = CategoryModel.objects.get_or_create(label=category_label)
        place_data['category'] = current_category

        try:

            PlaceModel.objects.create(**place_data)

        except Exception as error:

            print("Fail to create ")
            print("Reason: ", error)
            print("==========")

        line_count += 1

    print(f'Processed {line_count} lines.')
