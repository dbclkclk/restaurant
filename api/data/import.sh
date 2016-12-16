#!/bin/bash
echo "import allergies"
eval "/usr/bin/mongoimport --db test --collection allergy --drop --file /dev/shm/allergies.json --jsonArray"
echo "importing products"
eval "/usr/bin/mongoimport --db test --collection product --drop --file /dev/shm/products.json --jsonArray"
echo "importing products_allergies"
eval "/usr/bin/mongoimport --db test --collection allergy_products__product_allergies --drop --file /dev/shm/product_allergy.json --jsonArray"

