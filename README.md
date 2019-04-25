# card-game-API

**Show all card decks**
----
  Returns json data for all the decks created if they have some cards remaining.

* **URL**

  /api/deck

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** ```[{ id : 1v310cjuw1zdif, <br />
                    cards : [{<br />
                                value: "J",
                                suit: "club"
                              },
                              {
                                value: "A",
                                suit: "spades"
                              },
                              ...
                              ...],
                    remaining: 12},
                    {
                      id: ....,
                      cards:[{...}],
                      remaining:...
                    }]
                    ```
---- 


**Create New Deck**
----
  Returns json data for newly created deck with 52 cards shuffled.

* **URL**

  /api/deck/new

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 1v310cjuw1zdif, 
                    `cards : [{
                                `value: "J",
                                `suit: "club"
                              `},
                              `{
                                `value: "A",
                                `suit: "spades"
                              `},
                              `{...},
                              `{...}],
                    `remaining: 52}`
----

**Draw cards from specific deck**
----
  Returns json data for 5 drawn cards from specific deck referenced by deck id.

* **URL**

  /api/deck/:id/draw

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
                      `deckId: "1v310cjuwt3oz1",
                      `cards: [
                          `{
                              `value: "6",
                              `suit: "club"
                          `},
                          `{
                              `value: "3",
                              `suit: "diamond"
                          `},
                          `{
                              `value: "5",
                              `suit: "spades"
                          `},
                          `{
                              `value: "7",
                              `suit: "spades"
                          `},
                          `{
                              `value: "7",
                              `suit: "heart"
                          `}
                      `],
                      `remaining: 47
                   `}

