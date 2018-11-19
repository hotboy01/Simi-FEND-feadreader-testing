/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    
    describe('RSS Feeds', function() {
        
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        
        it('url are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();  // expectation for if URL defined
                expect(feed.url.length).not.toBe(0); // expectation for if the URL is not empty
            });
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        
        it('names are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();  // expectation that the feed has a name defined
                expect(feed.name.length).not.toBe(0); // expectation that the feed's name is not empty
            });
        });
    });

    /* A test suite named "The menu" */
describe('The menu', function() {

        /* A test that ensures the menu element is
         * hidden by default. 
         */
        
        it('is hidden', function() {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true); // expectation of the menu element to be hidden by default
        });
        
         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
         
         it('changes visibility on click', function() {
            const menu = document.querySelector('.menu-icon-link');
            const body = document.querySelector('body');
            
            menu.click(); // menu is simulated to be clicked
            expect(body.classList.contains('menu-hidden')).toBe(false); // expectation of menu to display when clicked
            menu.click(); // menu is simulated to be clicked
            expect(body.classList.contains('menu-hidden')).toBe(true); // expectation of menu to hide when clicked
        });
});

    /* A test suite named "Initial Entries" */
    
describe('Initial Entries', function() {
    
        /* loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        
        beforeEach(function(done) { // beforeEach function that esures everything in it runs before the expect statement
            loadFeed(0, done); // loadFeed function is called 
        });
        
        
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        
        it('completes it work', function() {
            expect($('.feed .entry').length).not.toBe(0); // expectation that there is at least a single entry in the feed container
        });
});

    /* A test suite named "New Feed Selection" */
    
describe('New Feed Selection', function() {
    let firstFeed;
    let secondFeed;
        
    /* loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    
    beforeEach(function(done) { // beforeEach function that esures everything in it runs before the expect statement
        loadFeed(0, function () {
            firstFeed =  $('.feed').html(); // content of feed container
            loadFeed(1, function () {
                secondFeed =  $('.feed').html(); // content of feed container 
                done();
            });
        });
    });
       
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        
        it('content changes', function() {
            expect(firstFeed).not.toEqual(secondFeed); // expectation of the first and new feed's content to be different                                                        
        });
});
}());
