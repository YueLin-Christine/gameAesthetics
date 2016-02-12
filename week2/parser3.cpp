//-----------------------------------------------------------------------------------------------------------
// GAME AESTHETICS: C++ Text Parser Part 3
//-----------------------------------------------------------------------------------------------------------
#include <iostream>
#include <cctype>
#include <string>

using namespace std;

// here we will use:

	// isspace(charVariable)	- here we can find out if the char variable is a space.
	//							- we'll use this to split our string.
	//


int main() {
	string command;
  	cout << "Type a command: ";
  	getline (cin,command);
  	cout << "\n";
	for (int i = 0; i < command.size(); i++) {
		command.at(i) = toupper(command.at(i));
	}
	cout << "Converted command to all caps: " << command << endl;


	// string word1 = "";
	// string word2 = "";
	// char c;	//we'll use c to store the current character and see if its a space.
	// for (int i = 0; i < command.size(); i++) {
	// 	c = command.at(i);	//get the current character,
	// 	if (isspace(c) && word1 != "") { //if the character is a space and word1 isn't empty,
	// 		break;	//break out of the for loop.
	// 	}
	// 	if (!isspace(c)) {  //if its a letter,
	// 		word1 += c;     //add the char to word1. we can use += here!
	// 	}
	// }

	// //here we'll loop again, but starting from the end of word1!
	// for (int i = word1.size(); i < command.size(); i++) {
	// 	c = command.at(i);
	// 	if (!isspace(c)) { //if the character isn't a space, add it to word 2.
	// 		word2 += c;
	// 	}
	// }

	// cout << "word 1 is: " << word1 << endl;
	// cout << "word 2 is: " << word2 << endl;

	//EXERCISE:___________________________________

	//1:
	//what happens if you enter more than two words?
	//try to solve this in two ways:
			// - only accept the first two words of any command.
			// - only accept the first and last words of any command.

   string word[200];
   for (int i = 0; i < 200; ++i)
   {
      word[i] = "";
   }

   char c1;  //we'll use c to store the current character and see if its a space.
   for (int i = 0; i < command.size(); i++) {
      c1 = command.at(i);   //get the current character,
      if (isspace(c1) && word[i] != "") { //if the character is a space and word1 isn't empty,
         break;   //break out of the for loop.
      }
      if (!isspace(c1)) {  //if its a letter,
         word[i] += c1;     //add the char to word1. we can use += here!
      }
   }

   //print out the word
   for(int i = 0; i < command.size(); i++){
      for (int j = word[i].size(); i < command.size(); i++) {
         c1 = command.at(j);
         if (!isspace(c1)) { //if the character isn't a space, add it to word 2.
            word[i+1] += c1;
         }
      }
   }

   for(int i = 0; i < command.size(); i++){
      cout << "word " << i << " is: " << word[i] << endl;
   }



	//2:
	//make an array of strings that will get recognized by the parser, like "LOOK", "GO", "GET", etc.
	//loop through the array to see if the command is recognized, then use a switch to display a custom response.


	//if you're comfortable with the above, try...
	//3: (ADVANCED)
	//if you're feeling brave, try to put this all into a function that will return an array of strings.
	//this is actually a trick question. but spend some time looking into why.
	//if you can't do it, psuedocode it, or try it in another language. look at how "split" works in processing for example.
	//_____________________________________________

	return 0;
}
