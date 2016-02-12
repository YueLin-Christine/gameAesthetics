#include <iostream>
#include <string>
using namespace std;

class Room {
public:
   string description;
   bool canGoNorth;
   bool canGoEast;
   bool canGoSouth;
   bool canGoWest;
};


int main()
{
   //global variables:
   // a string to store player input
   string input;
   // 2 variables to store player position, x and y
   int x = 1;
   int y = 1;
   // a 2D array to store our map
   Room map[3][3];


   for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
         map[j][i].description = "There's nothing here!";
         map[j][i].canGoNorth = false;
         map[j][i].canGoEast = false;
         map[j][i].canGoWest = false;
         map[j][i].canGoSouth = false;
      }
   }

   map[0][0].description = "You are stucked in D12 now, and the elevators are down.";
   map[0][0].canGoEast = true;

   map[1][0].description = ":( There's nothing here, go to other places, see if you can find anything!";
   map[1][0].canGoEast = true;
   map[1][0].canGoWest = true;
   map[1][0].canGoSouth = true;

   map[2][0].description = "You crane your neck skyward to see the grand Empire State Building up among the clouds! You feel dizzy.";
   map[2][0].canGoWest = true;
   map[2][0].canGoSouth = true;

   map[0][1].description = "Here lies a chocolate chip cookie.";
   map[0][1].canGoEast = true;
   map[0][1].canGoSouth = true;

   map[1][1].description = "Go explore! There are paths going NORTH or WEST (N/W).";
   map[1][1].canGoWest = true;
   map[1][1].canGoNorth = true;

   map[2][1].description = "Ooooops! There's no other path here! enter 'N' to go back";
   map[2][1].canGoNorth = true;

   map[0][2].description = "look! you found an Arduino UNO kit here! Continue!!";
   map[0][2].canGoEast = true;
   map[0][2].canGoNorth = true;

   map[1][2].description = " ";
   map[1][2].canGoEast = true;
   map[1][2].canGoWest = true;

   map[2][2].description = "What are you doing here? It's a dead end...... Hey Wait... There's something shinning there... enter'Y' to go check it out.";
   map[2][2].canGoWest = true;


   //game loop will a 'while' loop
   while (input != "q") {
      //check for the exit condition
      // map[x][y] = '_';
      cout << "you are at " << x << " " << y << endl;
      cout << map[x][y].description << endl;
      cout << "Which direction?" << endl;
      cin >> input; /// go north // pick up letter


      if (input == "N") {
         if (map[x][y].canGoNorth == true) {
            y--;
            cout<<endl;
         } else {
            cout << "you can't go that way! you fool!" << "\n\n";
         }
      } else if (input == "E") {
         if (map[x][y].canGoEast == true) {
            x++;
            cout<<endl;
         } else {
            cout << "you can't go that way!" << "\n\n";
         }
      } else if (input == "S") {
         if (map[x][y].canGoSouth == true) {
            y++;
            cout<<endl;
         } else {
            cout << "you can't go that way!" << "\n\n";
         }
      } else if (input == "W") {
         if (map[x][y].canGoWest == true) {
            x--;
            cout<<endl;
         } else {
            cout << "NO!" << "\n\n";
         }
      } else if(input == "Y"){
         if( x == 2 && y == 2){
            cout << "Oh, wow! you found the Aladdin's lamp!!!" << "\n\n";
         }
      }else if(input != "q"){
         cout << "I don't understand " << input << "\n\n";
      }

   }
      // map[x][y] = 'O';

   //    for (int i = 0; i < 10; i++) {
   //       for (int j = 0; j < 10; j++) {
   //          cout << map[j][i] << "|";
   //       }
   //       cout << endl;
   //    }
   // }
   return 0;
}
