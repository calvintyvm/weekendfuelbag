import csv

with open("./import_csv.py") as csvfile:
    spamreader = csv.reader(csvfile,
                            delimiter=' ',
                            quotechar='|')

    for row in spamreader:
        print(', '.join(row))
