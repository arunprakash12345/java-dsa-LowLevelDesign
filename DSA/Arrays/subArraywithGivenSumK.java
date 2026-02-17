import java.util.*;
public class subArraywithGivenSumK {
    public static int brute(int arr[], int k) {
        int index = -1, length = Integer.MIN_VALUE;
        ;
        for (int i = 0; i < arr.length; i++) {
            int sum = 0;
            for (int j = i; j < arr.length; j++) {
                sum += arr[j];
                if (sum == k) {
                    length = Math.max(length, j - i + 1);
                }
            }
        }
        if (length == Integer.MAX_VALUE)
            return 0;
        else
            return length;

    }

    public static int better(int arr[],int k)
    {
        int length=0;
        HashMap<Integer,Integer>map=new HashMap<>();
        int sum=0;
        map.put(0,-1);
        for(int i=0;i<arr.length;i++)
        {
            sum+=arr[i];
            if(sum==k)
                length=Math.max(length,i+1);

            int rem = sum-k;
            if(map.containsKey(rem))
            {
                int len = i-map.get(rem);
                length=Math.max(len,length);
            }
            if(!map.containsKey(sum))
            map.put(sum,i);
        }
        return length;

    }

    public static int optimized(int arr[], int k) {
        int left = 0;
        int right = 0;
        int n = arr.length;
        int sum = 0;
        int result = 0;
        while (right < n) {
            sum += arr[right];
            while (sum > k && left < n) {
                sum -= arr[left];
                left++;
            }
            if (sum == k)
                result = Math.max(result, right - left + 1);
            right++;

        }
        return result;
    }

    public static void main(String[] args) {
        int arr[] = { 10, 5, 2, 7, 1, 9 };
        int k = 15;
        int result = optimized(arr, k);
        System.out.print(result);
    }
}