//// the map

//class Map {
// int i;
// int j;
//int count=0;
// int maxCount=400; 
// String txt = "+";

// Map() {
//   i= width/2;
//   j = height/2;
// }

// void update() {
//   if(count<maxCount) {
//     int r = floor(random(4));

//     if (r == 0) {
//       j-=14;
//     } else if (r == 1) {
//       i+=14;
//     } else if (r == 2) {
//       j+=14;
//     } else if (r == 3) {
//       i-=14;
//     }    
//     count++;
//   }
// }

// void draw() {
//   update();
//   fill(255);
//   text(txt, i, j);
// }
//}


class Map {
  int i;
  int j;
  int count=0;
  int maxCount=400; 
  String txt = "+";
  int arr[][] = new int[maxCount][maxCount];

  Map() {
    i= width/2;
    j = height/2;
  }

  void update() {
    if (count<maxCount) {
      int r = floor(random(4));
      if (r == 0) {
        j-=14;
      } else if (r == 1) {
        i+=14;
      } else if (r == 2) {
        j+=14;
      } else if (r == 3) {
        i-=14;
      }    
      count++;
    }
  }

  void draw() {
    fill(255);
    text(txt, i, j);
  }
}