# Application Design

These ideas were taken from the Clean Architecture book from Uncle Bob

## Entities (/entities)

These classes contain Critical Business Rules and data, which are not specific to the application and how data flows. These rules exist outside of the software context and are exactly what the business thrives on.

Entities should not rely on any details, such as the database or UI.

## Use Cases (/use_cases)

These contain Application Specific Rules, and orchestrate moving data to and from the entities. Uses cases implement the business rules defined in the entities.

Use cases can rely on entities, but entities should not rely on use_cases. The use cases should NOT implement databases, UI, or frameworks

## Interactors/Adapters (/interactors)

These are used to convert data shaped for the use cases into what is needed by external forms, like the database, or UI.

The whole MVC layer of a GUI would go here (presenters, views, and controllers)
