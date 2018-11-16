cd /var/www/www.museoreinasofia.es/docroot/itinerancias/
rm -r *
cd /home/wwwdata/www-data/compartido/itinerancias
cp $1 /var/www/www.museoreinasofia.es/docroot/itinerancias/
cd /var/www/www.museoreinasofia.es/docroot/itinerancias/
tar -zxvf $1
rm $1

