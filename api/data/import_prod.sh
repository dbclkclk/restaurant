#!/bin/bash
echo "import allergies"
eval "mongoimport -h ds023500.mlab.com:23500 -d medullan_test -c allergy -u <user> -p <password> --file /api/data/allergies.json --jsonArray"
echo "importing products"
eval "mongoimport -h ds023500.mlab.com:23500 -d medullan_test -c product -u admin -p p@ssw0rd --file /api/data/products.json --jsonArray"
echo "importing products_allergies"
eval "mongoimport -h ds023500.mlab.com:23500 -d medullan_test -c allergy_products__product_allergies -u admin -p p@ssw0rd --file /api/data/product_allergy.json --jsonArray"

