# Coding Factory 2022

## Ανάπτυξη fullstack web εφαρμογής

### Development branch

Στο development branch γίνονται merge οι ουσιαστικές αλλαγές κατά την ανάπτυξη της εφαρμογής

### Changelog

#### lazy-loading branch

```mermaid
flowchart

    subgraph projects
        interfaces
        ui
        ui-forms
        ui --- ui-forms
        interfaces --- ui-forms
    end

    subgraph routing
        lazy&nbsploading -.- noauth
        lazy&nbsploading -.- admin
        lazy&nbsploading -.- user
        noauth --- welcome
        noauth --- login
        noauth --- register
        admin --- admin-dashboard
        admin --- user-category-create
        user --- user-dashboard
    end

    subgraph services
        app.service
        backend.service
    end

    app --- lazy&nbsploading
    app --- app.service
    app --- projects

    backend.service --- login
    backend.service --- register
    backend.service --- user-category-create

    projects --- admin
    projects --- noauth
    projects --- user
```

#### libraries-more branch

Ανάπτυξη βιβλιοθήκης φορμών και τύπων δεδομένων της εφαρμογής

#### library-primer branch

Ανάπτυξη βιβλιοθήκης Angular με τα βασικά UI components που θα χρησιμοποιεί η εφαρμογή στο frontend.

![](img/library-primer.png)

#### tailwindcss branch

Μετά την εγκατάσταση στο frontend του [tailwindcss](https://tailwindcss.com/) έχουμε την παρακάτω εμφάνιση της εφαρμογής:

![](img/tailwindcss.png)
