var app = angular.module('redditClone', ['angularMoment', 'ngAnimate']);

app.controller('PostController', function($scope) {
  $scope.showForm = false;
  $scope.commentForm = false;
  $scope.comments = false;
  $scope.upvote = function(post) {
    post.numVotes += 1;
  };

  $scope.downvote = function(post) {
    post.numVotes -= 1;
  };

  $scope.toggleForm = function() {
    $scope.showForm = !$scope.showForm;
  };

  $scope.addPost = function() {
      $scope.post.numVotes = 0;
      $scope.post.datePosted = new Date();
      $scope.posts.push($scope.post);
      $scope.post = {};
      $scope.toggleForm();
  };

  $scope.toggleCommentForm = function(post) {
    this.commentForm = !this.commentForm;
  };

  $scope.toggleCommentView = function(post) {
    this.comments = !this.comments;
  };

  $scope.addComment = function(post, commenter, comment) {
    post.comments.push({
    author: commenter,
    comment: comment
  });
    this.toggleCommentForm();
    this.comments = true;
    this.commenter = '';
    this.comment = '';
  };

  $scope.posts = [
    {
      title: 'Fried Cheese… with Club Sauce',
      author: 'George-Michael Bluth',
      image: '../images/lucille.jpg',
      description: "For the same reason you should believe a hundred dollar bill is no more than a hundred pennies! And that is why Jesus was often referred to as the King of Kings. Queens. The King of Queens. Look at us, crying like a bunch of girls on the last day of camp. I am having a love affair with this ice cream sandwich. We have unlimited juice? This party is going to be off the hook. Excuse me, do these effectively hide my thunder?",
      numVotes: 5,
      datePosted: "2015-08-31T19:10:47.650Z",
      comments: []
    },
    {
      title: 'Operation Hot Mother',
      author: 'Buster Bluth',
      image: '../images/gm.jpg',
      description: 'If this tableau I recreate, perhaps I can re-snare my mate. I think the only time you cooked for us was the morning Rosa\'s mom died. You gave us cereal in an ashtray. I think I might have someone who\'s going to circumvrent the law. Say goodbye to THESE! OH MY GOD, WE\'RE HAVING A FIRE… sale. Oh, the burning! My brother wasn\'t optimistic it could be done, but I didn\'t take "wasn\'t optimistic it could be done" for an answer.',
      numVotes: 1,
      datePosted: "2015-08-30T12:08:47.650Z",
      comments: []
    },
    {
      title: 'Dr. Funke\'s 100 Percent Natural Good Time Family Band Solution',
      author: 'Maeby Fünke',
      image: '../images/gob.jpg',
      description: "I made a huge tiny mistake. But anyhoo, can you believe that the only reason the club is going under is because it's in a terrifying neighborhood? What do you think about Sudden Valley? It sounds like a salad dressing, but for some reason I don't want to eat it. I don't care if it takes from now till the end of Shrimpfest. GENE!! So Ann, the question is, do you want a man or a boy? I know how I would answer.",
      numVotes: 2,
      datePosted: "2015-08-27T09:43:47.650Z",
      comments: []
    },
    {
      title: 'There are dozens of us! DOZENS! ',
      author: 'Barry Zuckerkorn',
      image: '../images/tobias.jpg',
      description: "Oh, yeah, the $4,000 suit is holding the elevator for a guy who doesn't make that in 3 months. Come on! I'm an ideas man, Michael. I think I proved that with 'Fuck Mountain.' Annhog's coming? No, no, it's pronounced a-nal-ra-pist. It wasn't really the pronunciation that bothered me. Buster's in what we like to call a light to no coma. In layman's terms, it might be considered a very heavy nap.",
      numVotes: -3,
      datePosted: "2015-08-29T19:54:47.650Z",
      comments: []
    },
    {
      title: 'Her?',
      author: 'Gene Parmesean',
      image: '../images/buster.jpg',
      description: "She keeps saying that God is going to show me a sign. The… something of my ways. Wisdom? It's probably wisdom. Everyone's laughing, and riding, and cornholing except Buster.  I'd rather be dead in California than alive in Arizona. A lady of the evening. Working girl. She turns illusions for money. We're just blowing through nap time, aren't we?",
      numVotes: 3,
      datePosted: "2015-08-26T03:39:47.650Z",
      comments: []
    },
    {
      title: 'The Bob Loblaw Law Blog',
      author: 'Ann Veal',
      image: '../images/lindsay.jpg',
      description: "Stop licking my hand, you horse's ass! Either I zip down, or he zips up, and that is a mighty long zipper on Mother's Cher jumpsuit. There's a new daddy in town. A discipline daddy. She's a girl, I need to teach her how to be a woman. Within her lies a queen. Let me out that queen. We need a name. Maybe Operation Hot Mother. No, let's try to top that. (They never did.) It's as Ann as the nose on plain's face. I should be in this Poof!",
      numVotes: 4,
      datePosted: "2015-08-24T03:39:21.650Z",
      comments: []
    }
  ];
});
