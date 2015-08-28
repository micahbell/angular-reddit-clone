var app = angular.module('redditClone', []);

app.controller('PostController', function($scope) {
  $scope.test = 'AFFIRMATIVE';
  $scope.posts = [
    {
      title: 'Fried Cheese… with Club Sauce',
      author: 'George-Michael Bluth',
      img: '../images/lucille.jpg',
      description: "Oh, yeah, the $4,000 suit is holding the elevator for a guy who doesn't make that in 3 months. Come on! She's not that Mexican, Mom. She's my Mexican. And she's Columbian or something. Annhog's coming? No, no, it's pronounced a-nal-ra-pist. It wasn't really the pronunciation that bothered me.",
      numVotes: 0,
      dataPosted: '2015-08-27'
    },
    {
      title: 'Operation Hot Mother',
      author: 'Buster Bluth',
      img: '../images/george-michael.jpg',
      description: 'If this tableau I recreate, perhaps I can re-snare my mate. I think the only time you cooked for us was the morning Rosa\'s mom died. You gave us cereal in an ashtray. I think I might have someone who\'s going to circumvrent the law. Say goodbye to THESE! OH MY GOD, WE\'RE HAVING A FIRE… sale. Oh, the burning! My brother wasn\'t optimistic it could be done, but I didn\'t take "wasn\'t optimistic it could be done" for an answer.',
      numVotes: 0,
      dataPosted: '1985-07-08'
    },
    {
      title: 'Dr. Funke\'s 100 Percent Natural Good Time Family Band Solution',
      author: 'Maeby Fünke',
      img: '../images/gob.jpg',
      description: "GENE!! So Ann, the question is, do you want a man or a boy? I know how I would answer. [Stabbing Gob] White power! Gob: I'm white! But anyhoo, can you believe that the only reason the club is going under is because it's in a terrifying neighborhood? What do you think about Sudden Valley? It sounds like a salad dressing, but for some reason I don't want to eat it.",
      numVotes: 0,
      dataPosted: '1990-10-17'
    }
  ];
});
