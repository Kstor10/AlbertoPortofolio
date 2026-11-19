---
order: 8
year: "2026"
status: functional
cover: /images/projects/finanzas/finance-endterm-configuracion-externa.webp
accent: lime
es:
  title: Finanzas personales
  eyebrow: Java · evolución consola → JavaFX
  summary: "Evolución individual de un gestor financiero: desde un CRUD por consola hasta una aplicación JavaFX conectada a MySQL, reproducible y cubierta por pruebas básicas."
  problem: "Registrar ingresos y gastos exige validar datos, mantener un balance coherente y conservar las operaciones más allá de la sesión, sin acoplar la aplicación a credenciales locales."
  solution:
    - "Primera versión por consola con CRUD, categorías, validaciones y cálculo de balance."
    - "Interfaz JavaFX con FXML para listar y crear ingresos y gastos."
    - "Capa DAO mediante JDBC y persistencia en MySQL."
    - "Configuración por variables de entorno, esquema SQL reproducible y pruebas JUnit."
  result: "La versión JavaFX compila con Java 24, supera cinco pruebas automatizadas y se verificó de extremo a extremo contra una instancia MySQL 8.4 aislada con datos de muestra."
  stack:
    - Java
    - JavaFX 21
    - FXML
    - Maven
    - MySQL
    - JDBC
    - JUnit 5
  role:
    - Diseño e implementación individual de ambas versiones
    - Modelado de operaciones, categorías y validaciones
    - Construcción de escenas FXML y acceso a datos con DAO
    - Configuración reproducible de base de datos y pruebas básicas
  gallery:
    - src: /images/projects/finanzas/finance-endterm-configuracion-externa.webp
      alt: "Aplicación JavaFX de finanzas personales mostrando ingresos y gastos de demostración"
      caption: "La vista principal consulta MySQL y presenta el balance de datos de muestra."
    - src: /images/projects/finanzas/finance-form.webp
      alt: "Formulario JavaFX para crear una nueva operación financiera"
      caption: "El formulario reúne tipo, importe, fecha y categoría con campos validados."
    - src: /images/projects/finanzas/finance-endterm.webp
      alt: "Segunda ejecución de la tabla JavaFX con operaciones financieras de muestra"
      caption: "Otra ejecución aislada confirma la lectura de operaciones persistidas."
en:
  title: Personal finance
  eyebrow: Java · console → JavaFX evolution
  summary: "An individual finance manager evolving from a console CRUD into a reproducible, MySQL-backed JavaFX application with basic automated tests."
  problem: "Recording income and expenses requires validated data, a consistent balance and persistent operations without coupling the application to local credentials."
  solution:
    - "An initial console version with CRUD operations, categories, validation and balance calculation."
    - "A JavaFX and FXML interface for listing and creating income and expenses."
    - "A JDBC DAO layer with MySQL persistence."
    - "Environment-based configuration, reproducible SQL schema and JUnit tests."
  result: "The JavaFX version builds with Java 24, passes five automated tests and was verified end to end against an isolated MySQL 8.4 instance using sample data."
  stack:
    - Java
    - JavaFX 21
    - FXML
    - Maven
    - MySQL
    - JDBC
    - JUnit 5
  role:
    - Individual design and implementation of both versions
    - Operation, category and validation modelling
    - FXML scene construction and DAO-based data access
    - Reproducible database configuration and basic tests
  gallery:
    - src: /images/projects/finanzas/finance-endterm-configuracion-externa.webp
      alt: "Personal-finance JavaFX application showing demonstration income and expenses"
      caption: "The main view queries MySQL and presents the balance from sample data."
    - src: /images/projects/finanzas/finance-form.webp
      alt: "JavaFX form for creating a new financial operation"
      caption: "The form brings type, amount, date and category into a validated workflow."
    - src: /images/projects/finanzas/finance-endterm.webp
      alt: "Second JavaFX table run showing sample financial operations"
      caption: "A separate isolated run confirms that persisted operations are loaded."
---

La ficha reúne dos entregas académicas privadas como una evolución técnica coherente.
