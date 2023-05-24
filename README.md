# Quadratic Equation Solver

## Description 

This is a simple console application designed to solve quadratic equations of the form: ```ax^2 + bx + c = 0```, a ≠ 0. It supports 2 types of modes: interactive and non-interactive (file).

### Interactive mode
When this mode is selected, the program allows the user to enter independently the parameters of the quadratic equation with the possibility of re-entry, when incorrect values.

### Non-interactive mode
When this mode is selected, the program allows the user to specify the name of the file contained in this directive, or specify the path to it. The contents of the file must correspond to the parameters of the quadratic equation, namely, the values must be stored sequentially on one line separated by one space in the ```file.txt``` format. For example: ```2 -9.4 4```, otherwise the program will return an error and stop running.

## How to start work

1. If you do not have Node.js, install it (my version ```14.13.1```)
2. Clone repoitory via ```git clone https://github.com/HoloborodkoM/mtpzd-lab1.git``` 
3. Pull up dependencies ```npm install```
4. Start application ```node main.js```

## Work with application

```
Which mode do you wanna use?
Interactive or non-interactive (press 1|2 respectively): wer
Invalid input!!! Try again.
Interactive or non-interactive (press 1|2 respectively):
Invalid input!!! Try again.
Interactive or non-interactive (press 1|2 respectively): 1
```
### Interactive mode:

```
a = 2
b = we
Error. Expected a valid real number, got we instead!!!
Try input parameter again:
b =
Error. Expected a valid real number, got  instead!!!
Try input parameter again:
b =   1
c = -3
Equation is: (2) x^2 + (1) x + (-3) = 0
There are 2 roots
x1 = 1
x2 = -1.5
```

```
a = 0
Error. Parameter 'a' cannot be 0(zero)!!!
Try input parameter again:
a = 1
b = 0
c = 9
Equation is: (1) x^2 + (0) x + (9) = 0
There are 0 root
```

### Non-interactive mode:

example.txt: 1 2 3

```
Which mode do you wanna use?
Interactive or non-interactive (press 1|2 respectively): 2
Enter name or path file: ./example.txt
Equation is: (1) x^2 + (2) x + (3) = 0
There are 0 root
```

Try read file: README.md

```
Enter name or path file: ./README.md
Error. Invalid file format!!!
```

Try open non-existent file

```
Enter name or path file: ./rty.txt
No such file or path!!!
```

## Revert commit

[Just here](https://github.com/HoloborodkoM/mtpzd-lab1/commit/df0e174469da8d6e317c5cd85b9512fdf83fa413)
