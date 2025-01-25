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
        6.3.1 Create LRU cache
    6.4 Responsive suggestion results
    

## To-Do


7. Comment Section
    7.1 [*] N level Comment Section using recursion 


8. Live Chat
    8.1 Long Polling


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
