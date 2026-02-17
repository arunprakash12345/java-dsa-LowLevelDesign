package Sorting;

public class bubble {
    public static int[] bubbleSort(int arr[])
    {
        int n=arr.length;
        for(int i=n-1;i>=1;i--)
        {
            boolean didSwaps=false;
            for(int j=0;j<i;j++)
            {
                if(arr[j]>arr[j+1]){
                int temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                didSwaps=true;
                }
            }
            if(didSwaps==false)
                break;
            
        }
        return arr;
    }
    public static void main(String[] args) {
        int arr[]={5,132,1,3,5,12,1241};
        arr = bubbleSort(arr);
        for(int i=0;i<arr.length;i++)
        System.out.print(arr[i]+" ");
    }
}


// Time Complexity - O(n2)
// Space Complexity - O(1)