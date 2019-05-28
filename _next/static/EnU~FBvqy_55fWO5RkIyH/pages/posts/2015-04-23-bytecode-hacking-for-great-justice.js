(window.webpackJsonp=window.webpackJsonp||[]).push([["3e11"],{dEAE:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2015-04-23-bytecode-hacking-for-great-justice",function(){var e=n("uo4j");return{page:e.default||e}}])},uo4j:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return r}),n.d(t,"default",function(){return s});var a=n("kOwS"),o=n("qNsG"),i=(n("q1tI"),n("E/Ix")),r={title:"Bytecode Hacking for Great Justice",date:new Date("2015-04-23T15:16:56.000Z"),tags:["code","python","bytecode","optimization"],layout:"post",redirect_from:["/post/117173339298/bytecode-hacking-for-great-justice"],preview_image:"http://i.imgur.com/OodCK0c.png",feature:!0,author:"Micha",author_link:"http://github.com/mynameisfiber"},l={frontMatter:r},c="wrapper";function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(c,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("p",null,Object(i.b)("em",null,"DO NOT TRY THIS AT HOME! NO PYTHONS WERE HURT IN THE CREATION OF THIS BLOG POST!"))),Object(i.b)("p",null,Object(i.b)("p",null,"Check out the code at code at ",Object(i.b)("a",{href:"http://github.com/mynameisfiber/pytailcall"},"github.com/mynameisfiber/pytailcall"))),Object(i.b)("p",null,Object(i.b)("p",null,"As an exercise into learning more about python 2.7 bytecode, I wanted to implement the thing that pythonistas ",Object(i.b)("a",{href:"http://neopythonic.blogspot.com/2009/04/tail-recursion-elimination.html"},"love to hate")," - tail call optimization! This isn","’","t ",Object(i.b)("a",{href:"http://www.teamrubber.com/blog/python-tail-optimisation-using-byteplay/"},"novel")," at all, but I chose to implement this only using the standard library so that I could understand more about generating and modifying bytecode. As a result, I","’","m sure there are ",Object(i.b)("em",null,"many")," edge cases that I don","’","t consider so please, keep your sys-ops sane and ",Object(i.b)("em",null,"do not use this code in production"),". ",Object(i.b)("a",{href:"https://github.com/mynameisfiber/pytailcall/"},"In the end"),", even though the code is fun it is a filthy hack that shouldn","’","t be used in production code and should never be considered to make it","’","s way into the python source. One point I really like on ",Object(i.b)("a",{href:"http://neopythonic.blogspot.com/2009/04/tail-recursion-elimination.html"},"Guido","’","s blog post")," about this issue is tail recursion optimization ruins the stack traces and detracts from python","’","s ability to debug easily.")),Object(i.b)("p",null,Object(i.b)("p",null,"Tail calls are when a function is recursing and returns simply on a function call to itself. This is different than normal recursion where multiple things can be happening on our recursed return statement. So, for example, this is tail recursion,")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"def factorial(N, result=1):\n    if N == 1:\n        return result\n    return factorial(N-1, N*result)\n")),Object(i.b)("p",null,"While this is not,"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"def factorial(N):\n    if N == 1:\n        return 1\n    return N * factorial(N-1)\n")),Object(i.b)("p",null,Object(i.b)("p",null,"So we can see that normal recursion uses the return register in order to maintain the state of the calculation. By contrast, tail recursion uses a function parameter. This is made particularly simple in python because you can have keyword arguments with default values to initialize the calculation.")),Object(i.b)("p",null,Object(i.b)("p",null,"The thing that makes tail calls particularly useful is the ability to optimize them. Generally when a function gets called, the system must set up a function stack in memory that maintains the state of the function, including local variables and code pointers, so that the function can go on its merry way. However, when we do a tail recursion we are trying to enter the same function stack that we are already in, just with changes to the values of the arguments! This can be quickly optimized by never creating the new function stack and instead just modifying the argument values and starting the function from the beginning!")),Object(i.b)("p",null,Object(i.b)("p",null,"One way of doing this is manually unravelling the recursion. For our example above, the factorial would become,")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"def factorial(N, result=1):\n    while True:\n        if N == 1:\n            return result\n        N, result = N-1, N*result\n")),Object(i.b)("p",null,Object(i.b)("p",null,"Not only will this speed up our code, but we also don","’","t have to worry about those pesky ",Object(i.b)("a",{href:"https://docs.python.org/2/library/sys.html#sys.setrecursionlimit"},"recursion limits")," that python imposes on us. Furthermore, the transformation is quite simple. All we did was add a ",Object(i.b)("inlineCode",{parentName:"p"},"while True:")," to the beginning of the function and change any tail calls with changes to the argument variables.")),Object(i.b)("p",null,Object(i.b)("p",null,"There are a whole host of methods to do this automatically (",Object(i.b)("a",{href:"http://tomforb.es/adding-tail-call-optimization-to-python"},"partial functions"),", ",Object(i.b)("a",{href:"http://lambda-the-ultimate.org/node/1331"},"exceptions"),", etc., but I thought it would be fun to do this by re-writing the bytecode of the function itself. Let","’","s start by looking at the actual bytecode of the ",Object(i.b)("inlineCode",{parentName:"p"},"factorial")," function using the ",Object(i.b)("inlineCode",{parentName:"p"},"dis")," module from the standard library.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),">>> dis.dis(factorial)\n# bytecode                                             # relevant python\n# -----------------------------------------------------#---------------------\n  2           0 LOAD_FAST                0 (N)         # if N == 1:\n              3 LOAD_CONST               1 (1)         #\n              6 COMPARE_OP               2 (==)        #\n              9 POP_JUMP_IF_FALSE       16             #\n                                                       #\n  3          12 LOAD_FAST               1 (result)     #    return result\n             15 RETURN_VALUE                           #\n                                                       #\n  4     >>   16 LOAD_GLOBAL              0 (factorial) # return factorial(N-1, N*result)\n             19 LOAD_FAST                0 (N)         #\n             22 LOAD_CONST               1 (1)         #\n             25 BINARY_SUBTRACT                        #\n             26 LOAD_FAST                0 (N)         #\n             29 LOAD_FAST                1 (result)    #\n             32 BINARY_MULTIPLY                        #\n             33 CALL_FUNCTION            2             #\n             36 RETURN_VALUE                           #\n")),Object(i.b)("p",null,Object(i.b)("p",null,"We can see the full structure of our function in the bytecode. First we load up ",Object(i.b)("inlineCode",{parentName:"p"},"N")," and the constant ",Object(i.b)("inlineCode",{parentName:"p"},"1")," and compare them using the ",Object(i.b)("inlineCode",{parentName:"p"},"COMPARE_OP")," bytecode. If the result if false, we jump to line 16 and if not we load the variable ",Object(i.b)("inlineCode",{parentName:"p"},"result")," into the stack and return it. On line 16, we first load the reference to the function named ",Object(i.b)("inlineCode",{parentName:"p"},"factorial")," (which happens to be the same function we","’","re in!) and start building up the arguments. First we load up ",Object(i.b)("inlineCode",{parentName:"p"},"N")," and ",Object(i.b)("inlineCode",{parentName:"p"},"1")," and call ",Object(i.b)("inlineCode",{parentName:"p"},"BINARY_SUBTRACT")," which will leave the value of ",Object(i.b)("inlineCode",{parentName:"p"},"N-1")," on the stack. Then we load up ",Object(i.b)("inlineCode",{parentName:"p"},"N")," and ",Object(i.b)("inlineCode",{parentName:"p"},"result")," and multiply them with ",Object(i.b)("inlineCode",{parentName:"p"},"BINARY_MULTIPLY")," which will push the value of ",Object(i.b)("inlineCode",{parentName:"p"},"N-1")," onto the stack. By calling the ",Object(i.b)("inlineCode",{parentName:"p"},"CALL_FUNCTION")," bytecode (with the argument ",Object(i.b)("inlineCode",{parentName:"p"},"2")," indicating that there are two arguments to the function), python can go out and start running the function in another context until it returns and we can call ",Object(i.b)("inlineCode",{parentName:"p"},"RETURN_VALUE")," on line 36 to return whatever is left in the stack. This may seem like a convoluted way of approaching how a function works (although it ",Object(i.b)("a",{href:"http://shop.oreilly.com/product/0636920028963.do"},"has its uses"),"!), but after a while spent looking at ",Object(i.b)("a",{href:"http://unpyc.sourceforge.net/Opcodes.html"},"opcodes")," this starts to make just as much sense as python itself!")),Object(i.b)("p",null,Object(i.b)("p",null,"In an ideal world, what would we want this bytecode to look like? Looking up the references on ",Object(i.b)("inlineCode",{parentName:"p"},"JUMP_ABSOLUTE"),", we can rewrite the above bytecode to be,")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"  2     >>    0 LOAD_FAST                0 (N)\n              3 LOAD_CONST               1 (1)\n              6 COMPARE_OP               2 (==)\n              9 POP_JUMP_IF_FALSE       16\n\n  3          12 LOAD_FAST               1 (result)\n             15 RETURN_VALUE\n\n  4     >>   16 LOAD_FAST                0 (N)\n             19 LOAD_CONST               1 (1)\n             22 BINARY_SUBTRACT\n             23 LOAD_FAST                0 (N)\n             26 LOAD_FAST                1 (result)\n             29 BINARY_MULTIPLY\n             30 STORE_FAST               1 (result)\n             33 STORE_FAST               0 (N)\n             36 JUMP_ABSOLUTE            0\n")),Object(i.b)("p",null,Object(i.b)("p",null,"The differences here start at line 16. Instead of loading a reference to the recursed function, we immediately start filling up the stack with what ",Object(i.b)("em",null,"were")," the arguments to the function. Then, once our arguments have been computed, instead of doing a ",Object(i.b)("inlineCode",{parentName:"p"},"CALL_FUNCTION"),", we start running a sequence of ",Object(i.b)("inlineCode",{parentName:"p"},"STORE_FAST")," to pop the calculated arguments off the stack and into the actual argument variables. Now that the arguments have been modified, we can call ",Object(i.b)("inlineCode",{parentName:"p"},"JUMP_ABSOLUTE")," with an argument of ",Object(i.b)("inlineCode",{parentName:"p"},"0")," in order to jump back to the beginning of the function and starting again. This last aspect, the ",Object(i.b)("inlineCode",{parentName:"p"},"JUMP_ABSOLUTE")," back to the beginning of the function as oppose to setting up a while loop, is one of the reasons this function is faster than the manual unrolling of the recursion we did above; we don","’","t need to calculate the conditions of the loop or do any modifications to our state, we simply start processing opcodes at line 0 again.")),Object(i.b)("p",null,Object(i.b)("p",null,"This may seem simple, but there are many corner cases that will get you (and in fact got me in the hours of ",Object(i.b)("inlineCode",{parentName:"p"},"SystemError")," exceptions I wrestled with). First of all, if the recursive return is already within what python calls a block (ie: a loop or a try..except..finally block), we need to call the ",Object(i.b)("inlineCode",{parentName:"p"},"POP_BLOCK")," opcode the right amount of times before our ",Object(i.b)("inlineCode",{parentName:"p"},"JUMP_ABSOLUTE")," so that we properly terminate any setup those sections need."),"\n",Object(i.b)("p",null,"Another problem, and probably much more annoying than the block counts, is that of changing the size and thus the addresses of the bytecodes. When bytecode is represented, it is simply a list of unsigned four-bit integers. Some of these integers represent jumps to other points in the list, and it refers to those other points by either relative offsets (e.g., jump five integers to the right) or by absolute addresses (e.g., jump to the tenth integer). In order to make sure these jumps go to the correct place after we modify the bytecode, we must keep a list of what we added (and where) and, once our editing is done, go back through and modify any addresses to again point to the correct place.")),Object(i.b)("p",null,Object(i.b)("p",null,"Once all these problems are solved, we are left with a ",Object(i.b)("a",{href:"https://github.com/mynameisfiber/pytailcall/blob/master/pytailcall/internal_loop.py#L77"},"general decorator")," to transform all of our tail recursion into the iterative versions! And this is indeed much faster. Looking at the benchmark supplied with ",Object(i.b)("a",{href:"https://github.com/mynameisfiber/pytailcall/"},"pytailcall"),", we can see that we reduce the overhead of recursion (by eliminating it) and are able to recurse much more than we were previously able to.")),Object(i.b)("p",null,Object(i.b)("a",{href:"http://i.imgur.com/OodCK0c.png"},Object(i.b)("img",{src:"http://i.imgur.com/OodCK0c.png",alt:"pytailcall benchmarks"}))),Object(i.b)("p",null,Object(i.b)("p",null,"In the ",Object(i.b)("a",{href:"https://github.com/mynameisfiber/pytailcall/blob/master/pytailcall/examples.py"},"benchmark")," above, ",Object(i.b)("inlineCode",{parentName:"p"},"native")," is the original function (note that native python could not complete all of the benchmarks due to maximum recursion errors). ",Object(i.b)("inlineCode",{parentName:"p"},"partial_func")," is a trick which wraps the function in a partial and changes it","’","s internal reference to itself. ",Object(i.b)("inlineCode",{parentName:"p"},"return_tuple")," is another bytecode hack that changes the recursion into a specialized return statement that triggers another call to the function. Finally, ",Object(i.b)("inlineCode",{parentName:"p"},"internal_loop")," is the bytecode hack described above.")),Object(i.b)("p",null,Object(i.b)("p",null,"So, by committing this ungodly sin against all things python stands for, we can get a 33% speedup over python tail recursed code! In general though, this was a great exercise in learning much more about how python bytecode works and the underlying structure of a function. While this sort of bytecode hacking is exactly that, a hack, being able to read bytecode and understand the output of ",Object(i.b)("inlineCode",{parentName:"p"},"dis.dis")," is incredibly useful when optimizing python code for actual production systems. If you want to know more about ",Object(i.b)("em",null,"that")," aspect of the optimization, and other more rigorous methods of optimization, check out ",Object(i.b)("a",{href:"http://shop.oreilly.com/product/0636920028963.do"},"High Performance Python"),".")),Object(i.b)("p",null,Object(i.b)("p",null,"-Micha")))}s.isMDXComponent=!0}},[["dEAE","5d41","9da1"]]]);