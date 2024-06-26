# ensure mysql-server is not installed
apt-get remove --purge mysql-server mysql
apt-get autoremove
apt-get autoclean
# check that it's not running
systemctl status mysql
# Unit mysql.service could not be found.


# install command-line mysql client
apt-get install mysql-client
# check
mysql
# ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2)

# install docker on VM
sudo apt update
sudo apt install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker
systemctl status docker
#  ● docker.service - Docker Application Container Engine
#       Loaded: loaded (/usr/lib/systemd/system/docker.service; enabled; preset: enabled)
#       Active: active (running) since Mon 2024-06-24 16:17:19 UTC; 1 day 20h ago
#  TriggeredBy: ● docker.socket
#         Docs: https://docs.docker.com
#     Main PID: 1496 (dockerd)
#        Tasks: 12
#       Memory: 74.6M (peak: 389.6M)
#          CPU: 31.533s
apt-get install docker-compose

# install firewall
apt install ufw
ufw status verbose

# check ports
sudo netstat -tuln

systemctl start ufw
systemctl status ufw
ufw enable
ufw allow 22/tcp
sudo ufw default deny incoming
sudo ufw default allow outgoing


#If you want to turn off UFW completely and delete all the rules, you can use reset command:
ufw reset

#create folders for mysql-data
