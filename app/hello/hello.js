angular.module('hellosolarsystem').component('hello', {
  templateUrl: 'hello/hello.html',
             
  controller: function() {
    this.greeting = 'hello';
    
    this.toggleGreeting = function() {
      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
    }
  }
})