#!/bin/bash
echo "import allergies"
eval "/usr/bin/mongoimport -h ds023500.mlab.com:23500 -d medullan_test -c allergy  --drop -u admin -p password --file /dev/shm/allergies.json --jsonArray"
echo "importing products"
eval "/usr/bin/mongoimport -h ds023500.mlab.com:23500 -d medullan_test -c product --drop -u admin -p password --file /dev/shm/products.json --jsonArray"
echo "importing products_allergies"
eval "/usr/bin/mongoimport -h ds023500.mlab.com:23500 -d medullan_test -c allergy_products__product_allergies --drop -u admin -p password --file /dev/shm/product_allergy.json --jsonArray"

