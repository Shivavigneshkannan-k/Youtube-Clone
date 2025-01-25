# Features build

1. Header 
2. SideBar
3. VideoContainer 
4. YouTube API Integrated
5. VideoCard * n

6. Search Bar 
    6.1 Search suggestions 
    6.2 [*] Debouncing - optimise performance
    6.3 [*] Cache with redux toolkit
       [x] 6.3.1 Create LRU cache - Not Implemented
    6.4 Responsive suggestion results
    
7. Comment Section
    7.1 [*] N level Comment Section using recursion

 
  
8. Live Chat
    8.1 Long Polling

    
## To-Do


## Notes:
    Live Chat >> Infinite Scroll >>> Pagination

    Challanges of Live Chat:
        - Getting Data Live
        - Updating the UI

    DATA (Live):
        - web sockets
            - No regular Interval
            - Data and UI layer is in-sync
            - Ex: Trading Apps,WhatsApp

        - Long/API Polling
            - There is a interval
            - Data is sent to UI layer after particular Interval 
            - Ex: Gmail, CricBuzz(Live cricket commentry)
        
    Live Chat:
      Usually live chats stores in the store and loads in to web page, but we not know how many message will it be.

      So, if we leave our live chat open for a sometime, our store as well as our webpage will be bloted and slows down.

      Therefore, usually, what youtube does is it will remove old messages after sometime.

      -- like it will only keep latest 200 messages and remove the old messages before.
