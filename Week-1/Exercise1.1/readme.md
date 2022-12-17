# When a user enters an URL in the browser, how does the browser fetch the desired result? 

## Ans: 

Suppose I want to visit the website of Pesto

### 1. The Browser looks for the IP address of the domain name in the DNS(Domain Name Server).
  * Domain name which I entered got converted into a DNS number (e.g.  https://100.95.234.0). So, the browser we can reach the website.

### 2. The Browser initiates a TCP connection with the server.
  * When the browser receives the IP address, it will build a connection between the browser and the server using the internet protocol. The most common protocol used is TCP protocol.

### 3. The browser sends an HTTP request to the server.
  * The browser sends a GET request to the server asking for webpage. It will also send the cookies that the browser has for this domain. 

### 4. The server handles the incoming request and sends an HTTP response.
  * The server handles the HTTP request and sends a response. Its contains status-line, headers, contains-length and body etc.
  > e.g. ```HTTP/1.1 200 OK
    Date: Tue, 28 Jan 2020 12:28:53 GMT
    Server: Apache/2.2.14 (Win32)
    Last-Modified: Wed, 22 Jul 2019 19:15:56 GMT
    Content-Length: 88
    Content-Type: text/html
    Connection: Closed``` 

  ![image](https://afteracademy.com/images/what-happens-when-you-type-a-url-in-the-web-browser-request-response-f68c0cb95019db02.jpg)

### 5. The browser displays the HTML content 
  * Now the browser gets the response and the HTML web page is rendered in phases. First, it gets the HTML structure and then it sends multiple GET requests to get the embedded links, images, CSS, javascript files, etc and other stuff.


## Rendering of HTML page
  * For rendering, a DOM and CSSOM are merged to form something called a Render Tree. Render Tree has the information required to mark and paint elements on the screen.
  * Also while forming a Render Tree, elements like ```<head>, <link>, <script>,``` and elements with 'display: none' in CSS are ignored since they are not rendered on the screen.

  ![image](https://res.cloudinary.com/practicaldev/image/fetch/s--uJ44oL2X--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https:/dev-to-uploads.s3.amazonaws.com/i/s0cj1gr1srugpkc34985.png)
