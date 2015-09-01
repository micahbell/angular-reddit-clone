var app = angular.module('redditClone', ['angularMoment']);

app.controller('PostController', function($scope) {
  $scope.upvote = function(post) {
    post.numVotes += 1;
  };

  $scope.downvote = function(post) {
    post.numVotes -= 1;
  };

  $scope.showForm = false;
  $scope.toggleForm = function() {
    $scope.showForm = !$scope.showForm;
  };

  $scope.addPost = function(t, a, i, d) {
    if(t == undefined || a == undefined || i == undefined || d == undefined) {
      $scope.invalid = true;
    } else {
      $scope.posts.push({
        title: t,
        author: a,
        image: i,
        description: d,
        numVotes: 0,
        datePosted: new Date()
      });
      $scope.toggleForm();
      $scope.title = '';
      $scope.author = '';
      $scope.image = '';
      $scope.description = '';
    };
  };

  $scope.commentForm = false;
  $scope.toggleCommentForm = function() {
    $scope.commentForm = !$scope.commentForm;
  };

  $scope.addComment = function(post, commenter, comment) {
    post.comments.push({
      author: commenter,
      comment: comment
    });
    $scope.toggleCommentForm();
    // Why won't these reset!?
    $scope.commenter = '';
    $scope.comment = '';
    $scope.comments = true;
  };

  $scope.posts = [
    {
      title: 'Fried Cheese… with Club Sauce',
      author: 'George-Michael Bluth',
      image: '../images/lucille.jpg',
      description: "For the same reason you should believe a hundred dollar bill is no more than a hundred pennies! And that is why Jesus was often referred to as the King of Kings. Queens. The King of Queens. Look at us, crying like a bunch of girls on the last day of camp. I am having a love affair with this ice cream sandwich. We have unlimited juice? This party is going to be off the hook. Excuse me, do these effectively hide my thunder?",
      numVotes: 5,
      datePosted: "2015-08-31T19:27:47.650Z",
      comments: []
    },
    {
      title: 'Operation Hot Mother',
      author: 'Buster Bluth',
      image: '../images/george-michael.jpg',
      description: 'If this tableau I recreate, perhaps I can re-snare my mate. I think the only time you cooked for us was the morning Rosa\'s mom died. You gave us cereal in an ashtray. I think I might have someone who\'s going to circumvrent the law. Say goodbye to THESE! OH MY GOD, WE\'RE HAVING A FIRE… sale. Oh, the burning! My brother wasn\'t optimistic it could be done, but I didn\'t take "wasn\'t optimistic it could be done" for an answer.',
      numVotes: 1,
      datePosted: "2015-08-30T12:27:47.650Z",
      comments: []
    },
    {
      title: 'Dr. Funke\'s 100 Percent Natural Good Time Family Band Solution',
      author: 'Maeby Fünke',
      image: '../images/gob.jpg',
      description: "GENE!! So Ann, the question is, do you want a man or a boy? I know how I would answer. [Stabbing Gob] White power! Gob: I'm white! But anyhoo, can you believe that the only reason the club is going under is because it's in a terrifying neighborhood? What do you think about Sudden Valley? It sounds like a salad dressing, but for some reason I don't want to eat it.",
      numVotes: -3,
      datePosted: "2015-08-27T09:27:47.650Z",
      comments: []
    },
    {
      title: 'There are dozens of us! DOZENS! ',
      author: 'Barry Zuckerkorn',
      image: '../images/tobias.jpg',
      description: "Oh, yeah, the $4,000 suit is holding the elevator for a guy who doesn't make that in 3 months. Come on! I'm an ideas man, Michael. I think I proved that with 'Fuck Mountain.' Annhog's coming? No, no, it's pronounced a-nal-ra-pist. It wasn't really the pronunciation that bothered me. Buster's in what we like to call a light to no coma. In layman's terms, it might be considered a very heavy nap.",
      numVotes: 2,
      datePosted: "2015-01-31T19:27:47.650Z",
      comments: []
    }
  ];
});
