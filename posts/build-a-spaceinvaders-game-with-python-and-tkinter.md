---
tags:
  - python
published: true
date: 2022-01-17T13:54:07.809Z
title: Build a SpaceInvaders Game With Python and Tkinter
featured: '/media/1_JoEIzf1tDaaVq-mdGkB0uw.jpg'
imageAlt: 'SpaceInvaders on Python3 and Tkinter'
---

If you have learned pyhton basics and you want to put your skills into practice, this game tutorial is going to help you to achieve your goal in a quick and handy way.


In this tutorial, you’ll learn how to build a complete SpaceInvators game, including:

- Draw objects on canvas with Tkinter module  
- Handling user input in order to control the game
- Moving objects according to the game logic
- Detecting collisions between objects

I have added this [project on GitHub](https://github.com/aelhirach/spaceInvaders). Feel free to download and experiment with it! To make this project work, you need to install Python3 & Tkinter :

``` python
sudo apt install python3
# brew install python3 => on mac
sudo apt install python3-pip
# pip3 install --upgrade pip  => on mac
pip3 install tk  
```

<br />

## 1 - Drawing the game canvas with Tkinter :

A SpaceInvators is a kind of video game derived from the action game in which the player control a ship or a character to destroy a large number of enemies using bullets while dodging enemy bullets to stay alive.

Firstly, we are going to create the game screen with Tkinter package. To ensure good use of tkinter you need to consult the [Tk documentation](https://docs.python.org/fr/3/library/tkinter.html).  


One of the most used  geometry manager in Tkinter is Grid manager which organises the widgets in a 2-dimensional table. The main widget is split into a number of rows and columns, and each “cell” in the resulting table can hold a widget. We are going to use this manager to divid the user interface (main screen) into 2 areas: the game scene and the controle panel, containing respectivley the game objects and the buttons & labels to control and show the game status.  

The rawspan parameter determine how many rows the widgets takes up. In our case the main screen will take 8 rows.

![](/media/build-a-spaceinvaders-game-with-python-and-tkinter/screen.png)


``` python
from tkinter import *

# globale variables :
W, H = 600, 700

# The main screen widget :
mainScreen = Tk()

# The game scene widget :
gameScene = Canvas(mainScreen, bg='grey', height=H, width=W)
gameScene.grid(row=0, column=0, rowspan=8)

# start the mainloop
mainScreen.mainloop()  
```

<br />

## 2 - Initialize the game :


The game objects are represented by rectangles, each rectangle is specified as two points: (x0, y0) is the top left corner, and (x1, y1) is the location of the pixel just outside of the bottom right corner. The  <b>create_rectangle</b> function returns an object id of the rectangle on the specified canvas parent. In the following example, we create a rectangle on the cavas C specified by top left corner (x0,y0) and bottom right corner (x1,y1) and thus determining the effective size like this : width = x0 + x1 and height = y0 + y1.

`id = C.create_rectangle(x0, y0, x1, y1, option, ...)`


![](/media/build-a-spaceinvaders-game-with-python-and-tkinter/create_rectangle.png)


``` python

# globale variables :
....
shipSize = 20
sp = 2 * shipSize # space between Invaders
y_init = 80 # initial y position of the top left  Invader
x_init = 40  # initial x position of the top left Invader
x = W / 2 - shipSize / 2 # my initial x position of the top left  
y = H - 100   # my initial y position of the top left  
nw, nh = 6, 4 # number of invaders row, and columns total = nw * nh  

invaders = [] # invaders array container  
me = [] # me array container
invadersColor = 'blue'
myColor = 'pink'


# functions
def init():
    "..."
    me.append(gameScene.create_rectangle(x, y, x + shipSize, y + shipSize, fill=myColor))
    for i in range(nw):
        for j in range(nh):
            x1 = x_init + i * shipSize + i * sp
            y1 = y_init + j * shipSize + j * sp
            invaders.append(gameScene.create_rectangle(x1, y1, x1 + shipSize, y1 + shipSize, width=2, fill=invadersColor))

# The game scene widget :
....
initBtn = Button(mainScreen, text='Init', command=init)
initBtn.grid(row=0, column=1)
quitBtn = Button(mainScreen, text='Quit', command=mainScreen.destroy)
quitBtn.grid(row=0, column=2)
```

<br />
<br />


## 3 - Handling user input and moving objects according to the game logic  :

In order to control the ship movement and firing the invaders with bullets we are going to listen to some keyboard events. To do this, we need to call the bind function of the main screen canvas with the <b>Key</b> event and a triggerhandler() function to manage the keyboard input. In other hand, invaders should also be able to move horizontaly and verticaly once the game is started, the moveInvaders() function will hold all that logic. The invaders will all move with the same proportion, we therfore need to calcule the next postion for only one invader and then deduce the next position of the other ones.


``` python
...
from tkinter.messagebox import *
from random import randint, choice

# globale variables :
...
bullets = []
myBulletsColor = 'purple'
deltaX = 10 # myShip step movement
deltaYBullet = 10 # myBullet step movement
bulletSize = 6  
flag = 0


probabilityBullet = 0.01 #
deltaT = 80 # delta time between two bullets from invaders

invaders = []
bullets = []
me = []
lives = 5

# functions
....
def Xmax():
    x = 0
    for en in invaders:
        if gameScene.coords(en)[0] > x:
            x = gameScene.coords(en)[0]
    return x


def Xmin():
    x = W
    for en in invaders:
        if gameScene.coords(en)[0] < x:
            x = gameScene.coords(en)[0]
    return x


def moveInvaders():
    """..."""
    global dx, dy, lives
    # calculate (dx et dy) according to the xmin xmax and the current postion of the invaders
    xmax = Xmax()
    xmin = Xmin()
    if dy > 0:
        dy = 0
        if xmin - deltaX < 0:
            dx = deltaX
        else:
            dx = -deltaX
    else:
        if xmin - deltaX < 0:
            dy = deltaY
            dx = 0
        elif xmax + deltaX > W:
            dy = deltaY
            dx = 0
    # move invaders with dx et dy
    for invader in invaders:
        gameScene.move(invader, dx, dy)
        # generate a random integer between 1-100 and check if equal to 1, if that is the case, invader will shoot a bullet
        if randint(1, 1 / probabilite_bullet) == 1:
            x1 = gameScene.coords(invader)[0] + shipSize / 2 - cb / 2
            y1 = gameScene.coords(invader)[3]
            enBullet = gameScene.create_rectangle(x1, y1, x1 + cb, y1 + cb, fill=invaders_bullets_color)
            bullets.append(
                [enBullet, 'enbullet', deltaYBullet])


def key(event):
    if event.keysym == 'p':
        startStop()
    elif event.keysym == 'Left':
        if gameScene.coords(me[0])[0] - deltaX > 0:
                gameScene.move(me[0], -deltaX, 0)
    elif event.keysym == 'Right':
        if gameScene.coords(me[0])[2] + deltaX < W:
                gameScene.move(me[0], deltaX, 0)
    elif event.keysym == 'space' or event.keysym == 'Up':
        x1 = gameScene.coords(me[0])[0] + shipSize / 2 - bulletSize / 2
        y1 = gameScene.coords(me[0])[1] + bulletSize
        bullets.append([gameScene.create_rectangle(x1, y1, x1 + bulletSize, y1 + bulletSize, fill=myBulletsColor), 'mybullets', -deltaYBullet])

def startStop():
    # start and stop the game
    global flag
    if flag == 0:
        flag = 1
         moveInvaders()
    else:
        flag = 0

# The game scene widget :
....
startStopBtn = Button(mainScreen, text='Start/Stop', command=startStop)
startStopBtn.grid(row=1, column=1)
```

<br />
<br />



## 4 - Collision :

One last step we have left to make the game complet is to manage the collision between the blocs and the bullets on the scene. The function isOnColision() will check if any obejct is on collision with a bullet by comparing the overlapping of their coordinates. The function coords of a Tkinter canvas return an array with the coordinates of the top left corner and the bottom right corner as follow : [x_tf, y_tf, x_br, y_br]. Two blocs are overlapped if the following conditions are met :

- **x_tf_1 < x_br_2**
- **x_br_1 > x_tf_2**
- **y_br_1 > y_tf_2**

``` python
...

# functions
...
def moveInvaders():
    ....

    bullet_to_delete = []
    for b in bullets:
        coord_b = gameScene.coords(b[0])
        if coord_b[3] < 0 or coord_b[1] > H:
            bullet_to_delete.append(b)
        else:
            gameScene.move(b[0], 0, b[2])  # Move the bullet of the invader to the bottom

            if b[1] == 'enbullet' and isOnColision(b[0], me[0]):
                bullet_to_delete.append(b)
                lives -= 1
                numberOfLivesValue.config(text=str(lives))

                if (lives == 0):
                    startStop()
                    showinfo("Vous avez perdu", "Nous n'avez plus de vie")

            elif b[1] == 'mybullets':
                myBulletIsDestroyed = False
                # check collision between bullets & invaders
                for ennemisBullet in bullets:
                    if ennemisBullet[1] == 'enbullet' and isOnColision(ennemisBullet[0], b[0]):
                        bullet_to_delete.append(ennemisBullet)
                        bullet_to_delete.append(b)
                        myBulletIsDestroyed = True
                        break
                if not myBulletIsDestroyed:
                    for e in invaders:
                        if isOnColision(e, b[0]):
                            bullet_to_delete.append(b)
                            gameScene.delete(e)
                            invaders.remove(e)
                            numberOfInvadersValue.config(text=str(len(invaders)))
                            if (len(invaders) == 0):
                                startStop()
                                showinfo("You win", "You killed all the invaders")

                            break

    for b in bullet_to_delete:
        if (b in bullets):
            bullets.remove(b)
        gameScene.delete(b[0])

    if flag == 1:
        mainScreen.after(deltaT, moveInvaders)

def isOnColision(bullet, bloc):
    coord_bullet = gameScene.coords(bullet)  # x_tf_1, y_tf_1, x_br_1, y_br_1
    coord_bloc = gameScene.coords(bloc)  # x_tf_2, y_tf_2, x_br_2, y_br_2

    x_tf_1, y_tf_1, x_br_1, y_br_1 = coord_bullet[0], coord_bullet[1], coord_bullet[2], coord_bullet[3]
    x_tf_2, y_tf_2, x_br_2, y_br_2  = coord_bloc[0], coord_bloc[1], coord_bloc[2], coord_bloc[3]

    return (x_tf_1 < x_br_2) and (x_br_1 > x_tf_2) and (y_br_1 > y_tf_2)
```

</br>

#Conclusion

In this step-by-step tutorial, we learned the basics of how to use Python by making a game.
One thing to keep in mind, making a game won't come to you overnight even if you are an expert programmer. Some skills in the process of game development can’t be skipped over no matter what you do. However, start making games the first day you begin your learning journey it will hugely improve your skills.

The skills and resources provided in this tutorial will give you a great stepping stone, and an important part of making a game is how you plan step by step to make that game.

You have clearly understood that the best way to improve and learn how you make games is by making games.

Good luck out there, and I wish you the best of luck with pyhton & game development journey!
