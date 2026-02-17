package Sorting;

public class insertion {
    public static int[] insertionSort(int arr[])
    {
        int n=arr.length;

        for(int i=0;i<n;i++)
        {
            int j=i;
            while(j>0 && arr[j-1]>arr[j])
            {
                int temp=arr[j-1];
                arr[j-1]=arr[j];
                arr[j]=temp;
                j--;
            }
        }
        return arr;
    }
    public static void main(String[] args) {
        int arr[]={4,5,6,1,2,3,4};
        arr = insertionSort(arr);
        for(int i=0;i<arr.length;i++)
        System.out.print(arr[i]+" ");
    }
}
