#include <iostream>
#include <tuple>
#include <deque>
#include <algorithm>

using namespace std;

//helper function sorts 3rd element of tuple
bool sortbythird(const tuple<int, int,int>& a, const tuple<int, int,int>& b) 
{ 
    return (get<2>(a) > get<2>(b)); 
} 

void printTuple(const tuple<int,int,int> &activity) 
{
    std::cout << "\n" << get<0>(activity) 
                      << " " << get<1>(activity) 
                      << " " << get<2>(activity);
}

void printDeqTuple(const deque<tuple<int,int,int>> &deq) {
    
    for(auto const &i : deq) {
        printTuple(i);
    }
}

int main() {

      /* extra example
  tuple<int,int,int> j1 (1, 2, 100);
  tuple<int,int,int> j2 (2, 1, 19);
  tuple<int,int,int> j3 (3, 2, 27);
  tuple<int,int,int> j4 (4, 1, 25);
  tuple<int,int,int> j5 (5, 3, 15);
  deque<tuple<int,int,int>> deq = {j1,j2,j3,j4,j5};
  */

//job number, deadline, penalty ( example from CLRS )
tuple<int,int,int> j1(1,4,70);  
tuple<int,int, int> j2(2,2,60); 
tuple<int,int, int> j3(3,4,50);   
tuple<int,int, int> j4(4,3,40);    
tuple<int,int, int> j5(5,1,30);    
tuple<int,int, int> j6(6,4,20);    
tuple<int,int, int> j7(7,6,10);    

deque<tuple<int,int,int>> deq = {j1,j2,j3,j4,j5,j6,j7};
deque<const tuple<int,int,int>*> on_time_tasks (deq.size(), NULL);  
deque<const tuple<int,int,int>*> late_tasks;

//sort by descending penalty
sort(deq.begin(), deq.end(), sortbythird); 

int index = 0;

// * algorithm starts here *
//iterate through all jobs
for(auto const &x : deq) {
        
    index = get<1>(x)-1;

    for(int j = index; j >= 0; --j) 
    {
        if(on_time_tasks.at(j) == NULL)     //an available time slot is NULL
        {
            on_time_tasks.at(j) = &x;
            break;
        }

        //no more time slots found
        if(j == 0) {
            late_tasks.push_back(&x);
        }
    }
} 
// * algorithm ends here *

//printing Optimal Schedule
std::cout << "Job Number, Deadline, Penalty\n";
std::cout << "\noptimal schedule";
    for(auto const &i : on_time_tasks) {
        if(i)
        {
            printTuple(*i);
        }
    }

std::cout << "\n\nlate tasks";
    for(auto const &i : late_tasks) {
        if(i)
        printTuple(*i);
    }
}
