#include <iostream>
#include <fstream>
using namespace std;

char getTile(int x, int y, unsigned char data[], int size, int w, int h);
int writeBytes(int offset, unsigned char data[]);

class Landtype{
public:
   Hongkong();// How do I know what kind of parameters do I need here
   Jungle();
   DisneyMovie();
   void loadMap();

   string description;
   bool goRight;
   bool goLeft;
   bool moveForward;
   bool moveBackward;
   bool goUp;
   bool goDown;

private:
   //what to put inside of private
};

void Landtype::loadMap(){

}

Landtype::Hongkong(){
   //custom object properties
   ifstream map("hongkong.bmp");
}

Landtype::Jungle(){
   //custom object properties
   ifstream map("jungle.bmp");
}

Landtype::DisneyMovie(){
   //custom object properties
   fstream map("disneyMovie.bmp");
}


int main() {
	// ifstream map("8x8flipped.bmp");
	unsigned char data; //variable to store temporary bytes

	const int BMPSIZE = 248;	//actual size in bytes of the bmp file
	unsigned char bmpBytes[BMPSIZE];	//array of 8-bit integers to store our bytes

	int whichByte = 0;
	while (map >> data) {
		//as long as the file has bytes, plug it into the array
		bmpBytes[whichByte] = data;
		whichByte++;
	}

	map.close();

	//create a new array to hold the values that we actually want.
	const int SIZE = 8;
	char grid[SIZE][SIZE];

	//loop through all the bytes we want and give values to our new array.
	for (int i = 0; i < SIZE; i++) {
		for (int j = 0; j < SIZE; j++) {
			int r = 0;
			int g = 0;
			int b = 0;
			int n = 54 + (i * SIZE + j) * 3;

			b = writeBytes(n,bmpBytes);
			g = writeBytes(n+1,bmpBytes);
			r = writeBytes(n+2,bmpBytes);

			cout << r << " ";
			cout << g << " ";
			cout << b << "\n";

			if (r == 255 && g == 255 && b == 255) {
				grid[j][i] = '_';
			} else {
				grid[j][i] = 'X';
			}
		}
	}

	//print out the converted array
	for (int i = 0; i < SIZE; i++) {
		for (int j = 0; j < SIZE; j++) {
			cout << grid[j][i] << " ";
		}
		cout << endl;
	}
	return 0;
}


int writeBytes(int offset, unsigned char data[]) {
	return data[offset];
}
