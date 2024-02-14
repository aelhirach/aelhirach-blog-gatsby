---
title: 'Build a Pente game with Minimax algorithm and Alpha Beta Optimization on C#'
tags: ["csharp"]
published: true
date: 2024-02-14T08:34:07.809Z
featured: '/media/65JtmLIkm9t-aDcQqmdGm39uw.jpg'
imageAlt: 'Pente game with MiniMax algorithm and Alpha Beta Optimization on C#'
---
# Introduction :
In the realm of Artificial Intelligence, the journey from basic search algorithms to more sophisticated strategies marks a profound evolution. Having explored fundamental search algorithms like Blind and Heuristic searches in previous tutorials, we now embark on a new frontier: game-playing algorithms.

Building upon the foundational knowledge laid out in the previous articles, we delve into the practical application of Minimax with Alpha-Beta pruning in the building of a Pente game with AI. While Blind and Heuristic searches provided valuable insights into problem-solving methodologies, Minimax with Alpha-Beta pruning introduces a paradigm shift in tackling strategic decision-making within game environments.

In this article, we transition from theoretical discussions to hands-on implementation, leveraging the power of Minimax with Alpha-Beta pruning to create a formidable digital opponent in the game of Pente. Through this journey, we not only deepen our understanding of AI algorithms but also witness their tangible impact on enhancing gaming experiences.

I have added this [project on GitHub](https://github.com/aelhirach/Pent-2.0). Feel free to download and experiment with it! To make this project work, you need the following tools :
- Visual Studio Code
- C# Dev Kit extension
- For .NET Development, the .NET SDK


<br />

## 1 - Why new techniques and algorithms for games? :


Game algorithms is a special case of a search problem, with some new requirements. They differ from basic search methods due to the inherent unpredictability of game environments, where opponent moves are unknown and constantly changing. 
Unlike traditional search problems with well-defined states and actions, games introduce uncertainty and dynamic decision-making, making it challenging to anticipate the opponent's next move. 
This unpredictability significantly expands the search space, as each possible move by the opponent creates branching paths that need to be explored. 

Basic search methods may struggle to handle this complexity efficiently, leading to impractical computational requirements. 
In contrast, game algorithms like Minimax with Alpha-Beta pruning are specifically designed to navigate these intricate search spaces, making informed decisions even in the face of uncertainty. By considering potential opponent moves and minimizing the search space through pruning techniques, game algorithms excel at adapting to dynamic game environments and crafting intelligent gameplay strategies.

<br />

## 2 - Minimax Game algorithm :


Minimax is a decision-making algorithm commonly used in two-player, zero-sum games, such as chess, tic-tac-toe, or Pente. The primary objective of Minimax is to determine the best move for a player by considering the possible moves of both players and choosing the one that maximizes the player's chances of winning while minimizing the opponent's chances.

- Step 1 : The first step in the  Minimax algorithm is to represent the game as a tree structure, where each node represents a possible game state, and the edges represent possible moves by the players.
The root of the tree represents the initial game state, and the leaf nodes represent terminal states where the game ends (win, lose, or draw).

- Step 2 : Minimax employs a recursive search through the game tree to determine the optimal move for the current player.
At each level of the tree, the algorithm alternates between maximizing and minimizing player moves.
Max nodes represent the current player's turn, aiming to maximize their utility (score), while min nodes represent the opponent's turn, aiming to minimize the current player's utility.

- Step 3 : When the algorithm reaches a leaf node (terminal state) in the game tree, it evaluates the utility of that state using an evaluation function.
  The evaluation function assigns a numerical value to the terminal state, representing how favorable it is for the current player.
The following figure illustrates how the Minimax algorithm (depth = 2) explores the tree step by step :

- Step 4 : Once the algorithm has evaluated all possible moves and propagated the scores to the root node, it selects the move corresponding to the highest score at the root level.
  This chosen move represents the optimal move according to the Minimax algorithm.

- Step 5 : To manage computational complexity, Minimax often employs depth-limited search, limiting the depth of the recursive search to a certain level.
  Depth-limited search ensures that the algorithm explores the game tree to a manageable depth, balancing between computational resources and decision quality.

![](/media/build-pente-game-with-ai-and-csharp/min_max_restrictions.png)

The pseudocode for the depth-limited Minimax algorithm is presented below.

![](/media/build-pente-game-with-ai-and-csharp/min_max_algorithm.png)

Example for a Static Evaluation in Tic Tac Toe game :

![](/media/build-pente-game-with-ai-and-csharp/tic-tac-toe-static-evaluation-example.png)


<br />
<br />

## 3 - Optimization: Alpha-Beta pruning :

As the game tree expands exponentially, exploring all possible moves becomes computationally expensive and impractical. This is where Alpha-Beta pruning comes into play. Alpha-Beta pruning is an optimization technique used to reduce the number of nodes evaluated by the Minimax algorithm. By intelligently discarding branches of the search tree that are unlikely to lead to a better outcome, Alpha-Beta pruning significantly reduces the search space without affecting the final decision.


Instead of creating the entire tree up to a certain depth and then propagating values, it's more efficient to interleave the tree generation with value propagation. This means that as nodes are generated and evaluated, their values are immediately propagated up the tree. This approach allows us to identify redundant parts of the tree sooner, as some node values may indicate that further exploration is unnecessary.

![](/media/build-pente-game-with-ai-and-csharp/alpha-beta-idea.png)


Alpha value represents the best score found so far for the maximizing player, while beta value represents the best score found so far for the minimizing player. These values help limit the search space by indicating when certain branches of the search tree can be pruned, leading to more efficient computation while still finding optimal solutions.

![](/media/build-pente-game-with-ai-and-csharp/alpha-beta-terminology.png)

<br />
<br />


# Building a Pente Game with C# using AI with Minimax Algorithm and Alpha Beta Optimization
In this part of the project, we will introduce a strategy game called "Pente" (Pente in Greek corresponds to five). 
This game pits two players against each other: typically **White** and **Black**. 
To win a game, one must align five pieces of their color. The White and Black players take turns placing one of their pieces on the board.

![](/media/build-pente-game-with-ai-and-csharp/pente-game.png)

## 1 - the logic and modelization of the Pente game
To implement the different concepts of the game, we will create the following classes:

- **1-** **Place Enumeration** : This enumeration allows each position on the board to have a state. That is, whether it is occupied by a black pawn (Black) or a white pawn (White). If the position is not occupied, it will have a value of Null.
- **2-** **Board Class** : This class represents the state of the board at a given moment.
The member variables and methods of the Board class are as follows:
   - Place[,] area: This is a two-dimensional array that describes the state (Black, White, Null) of all positions on the board.
   - int lastMoveX and lastMoveY: These two variables successively contain the X and Y coordinates of the last pawn placed on the board.
   - int WhiteCost and BlackCost: These two integers represent the cost of white pawns and the cost of black pawns on the board, respectively. (We will see later in the MiniMax class how we calculate these costs).
   - A method IsGameOver: It checks, with each addition of a pawn to the board, if a player has aligned five pawns. If true, it sends a Rectangle object that bounds the aligned pawns, allowing us to draw a line on these pawns. Otherwise, the rectangle is empty, indicating that there are no five aligned pawns on the board.

- **3-** **State Enumeration** : This enumeration defines the αβ window, where α and β are the two parameters passed to the "Calculate" function in the MiniMax class. 
Therefore, α represents the best case for the Min player, and β represents the best case for the Max player. In the ideal case, alpha is initialized to -INFINITY and beta to +INFINITY. 
However, in the case of an "Int" object, α will be initialized to -2147483648 (the smallest value assignable to an integer in C#), while β will have an initial value of 2147483647 (the largest value assignable to an integer in C#). 
Pruned nodes are those that would be called with a window such that α ≥ β.

- **4-** **MiniMax Class** : This class implements the MiniMax algorithm. It contains the following member variables and methods:
    - A board object of type "Board": Represents the game board on which the algorithm is applied (the main game board).
    - A bestPlay object of type "Board": Represents the best situation to play, as determined by the MiniMax algorithm.
    - WhiteMove() method: Receives the coordinates of the placed pawn and assigns these coordinates to the lastMoveX and lastMoveY variables of the board.
    - Calculate() method: This is the most important method, which executes the MiniMax algorithm with Alpha-Beta pruning. It takes the depth parameter and the alpha-beta values as a State object.
    - The StateCost() method: Provides a static estimation of a board from the perspective of the Max player (computer). It represents the difference between the cost of a board for black pawns and the cost of a board for white pawns (Static estimation = Black Cost - White Cost). The next point explains how we calculate the cost of a board.
We should note that, since the game board has dimensions of 19x19, the maximum depth has been limited to 2 in order to reduce the number of possible cases calculated by the algorithm.
    - A Cost() method: Calculates the cost of a board for a given player. It receives 3 parameters:
    - An object of type Board: The board for which the cost is calculated.
    - An object of type Place (Black or White): The type of player for which the cost is calculated. For example, if the value is Black, the method returns the cost of the board for the Black player.
    - An object of type Place (White or Black): The opposite of the previous object. This represents the opponent player.

## 2 - The calculation of the cost

The calculation of the cost is done as follows: (Example for black pawn)

- **Step 1** : For each row: we calculate the number of possibilities to align 5 black pawns horizontally. 
To do this, we iterate through the row for 5 iterations with three variables: 
**score** (the score obtained in 5 iterations), **numBlack** (number of black pawns in the 5 iterations), and **iterationBlack** (number of iterations until 5).
  - If a white pawn is found, we start again from the last pawn.
  - Else, we continue until reaching 5 iterations, then we test:
      - We decrement iterationBlack to iterate through each pawn.
      - If numBlack=0: the score =10<sup>0</sup> =1
      - If there is only one black pawn: the score = 10<sup>1</sup> =10
      - If there are 2 black pawns: the score = 10² =100
      - If there are 3 black pawns: the score = 10³=1000
      - If there are 4 black pawns: the score = 10<sup>4</sup>=10000
      - If there are 5 black pawns: the score = 10<sup>5</sup>=100000
      - If the first pawn is black, numBlack- -

![](/media/build-pente-game-with-ai-and-csharp/pente-illustration-model.png)

- **Step 2** : For each column: Similarly to the previous method, we calculate the number of possibilities to align 5 black pawns vertically.

- **Step 3** : An additional improvement would be to calculate the probabilities of aligning 5 pawns diagonally.

#Conclusion

In conclusion, exploring the implementation of Minimax with Alpha-Beta pruning in the context of building a Pente game AI has provided valuable insights into the realm of game-playing algorithms. 
By leveraging these sophisticated techniques, we've witnessed the transformation of theoretical concepts into practical solutions, empowering AI agents to make strategic decisions in dynamic and competitive environments. 
Through the intricate interplay of search algorithms, evaluation functions, and pruning strategies, we've not only enhanced our understanding of AI algorithms but also showcased their potential to revolutionize gaming experiences. 
As we continue to delve deeper into the realm of artificial intelligence, the journey towards creating intelligent game-playing agents serves as a testament to the ingenuity and innovation driving the evolution of AI technology.

You've recognized again that the most effective method to enhance and grasp game development is through active game creation.

Best wishes on your AI and game development journey! I wish you all the success ahead!
