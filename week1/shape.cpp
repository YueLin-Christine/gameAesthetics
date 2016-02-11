#include<iostream>
using namespace std;

int main()
{
   // const int COLS = 35;
   // const int ROWS = 15;
   // char grid[COLS][ROWS];
   char i;
   while(i !='q'){
    for(int c=1;c<=15;c++)
    {
      for(int r=0;r<c;r++)
      {
       cout<<"*";  // Printing asterisk here
    }
      cout<<endl;   // new line
      i=i+1;
   }
   cin>>i;
}

}
