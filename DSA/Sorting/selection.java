package Sorting;

public class selection {
    public static int[] selectionSort(int arr[])
    {
        for(int i=0;i<arr.length-1;i++)
        {
            int min=i;
            for(int j=i;j<arr.length;j++)
            {
                if(arr[j]<arr[min])
                    min=j;
            }
            int temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
        }
        return arr;
    }
    public static void main(String[] args) {
        int arr[]={5,132,1,3,5,12,1241};
        arr = selectionSort(arr);
        for(int i=0;i<arr.length;i++)
        System.out.print(arr[i]+" ");
    }
}


// Time Complexity - O(n2)
// Space Complexity - O(1)