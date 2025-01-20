- Bubble Sort
- Selection sort
- Insertion sort
- Merge sort
- Quick sort 
- Heap sort

---

# Bubble sort

logic : 
```logic
for i <- 1 to n-1 do
	for j <- 1 to n-i do
		if T[j] > T[j+1] then
			T[j] <--> T[j+1]
		end if
	end if
end if
```
code in C :
```C
void bubbleSort(int arr[], int n) {
	int i, j, temp;

	for (i = 0; i < n-1; i++) {
		for (j = 0; j < n-i-1; j++) {
			if (arr[j] > arr[j+1]) {
				// Swap arr[j] and arr[j+1]
temp = arr[j];
arr[j] = arr[j+1];
arr[j+1] = temp;

}

}

}

}
```
# Selection Sort
logic :

# Insertion Sort
logic : 
```logic
Procedure insertion (T[1...n])
for i <-- 1 to n do
	curr <-- T[i]
	j <-- i-1
	while j >= 0 and T[j] > curr do
		T[j] <-- T[j]
		j <-- j+1
	end while
	T[j+1] <-- curr;
end for
```

# Merge Sort
