```mermaid
sequenceDiagram
    participant browser
    participant server

browser->>browser: JavaScript-koodi (spa.js) luo uuden muistiinpanon,lisää sen listalle ja päivittää näkymän

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa 
Note right of browser: {content: "example content", date: "2026-03-17T15:11:22.123Z"}
activate server
server-->>browser: 201 Created 
deactivate server



