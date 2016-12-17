#!/bin/bash
echo "import allergies"
eval "mongoimport -h ds023500.mlab.com:23500 -d medullan_test -c allergy  --drop -u <user> -p password --file /api/data/allergies.json --jsonArray"
echo "importing products"
eval "mongoimport -h ds023500.mlab.com:23500 -d medullan_test -c product --drop -u admin -p password --file /api/data/products.json --jsonArray"
echo "importing products_allergies"
eval "mongoimport -h ds023500.mlab.com:23500 -d medullan_test -c allergy_products__product_allergies --drop -u admin -p password --file /api/data/product_allergy.json --jsonArray"

