CREATE USER 'Awarle'@'localhost' IDENTIFIED BY 'Dcwp0557@';

GRANT ALL PRIVILEGES
  ON stud_pokedex.*
  TO 'Awarle'@'localhost';

FLUSH PRIVILEGES;

SELECT User, Host FROM mysql.user WHERE User = 'Awarle';
SHOW GRANTS FOR 'Awarle'@'localhost';

