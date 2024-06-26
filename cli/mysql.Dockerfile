FROM mysql:8.4.0

# Optionally, set the root password. If not specified, docker will generate one
ENV MYSQL_ROOT_PASSWORD=qwerty123

# Optionally, specify a custom database to be created when MySQL starts
# ENV MYSQL_DATABASE=my_database

# Optionally, specify a custom user and its password
# ENV MYSQL_USER=my_user
# ENV MYSQL_PASSWORD=my_password

# Optionally, expose MySQL port. Default is 3306
# EXPOSE 3306

# Optionally, copy SQL scripts to initialize the database
# COPY ./my_init_script.sql /docker-entrypoint-initdb.d/

# By default, Docker containers run as root, you might want to create a custom user for the database instead

CMD ["mysqld"]
