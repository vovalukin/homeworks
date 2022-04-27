public class MainApp {
 
    public static void main(String[] args) {
        int[] arr = makeRandomArr(10, 10);
        
        int evenSum = 0;
        int oddSum = 0;
        for (int i = 0; i < arr.length; i++) {
            if (i % 2 == 0) {
                evenSum += arr[i];
            } else {
                oddSum += arr[i];
            }
        }
        
        System.out.println("array: " + Arrays.toString(arr));
        System.out.format("even sum: %d\n", evenSum);
        System.out.format("odd sum: %d\n", oddSum);
    }
 
    private static int[] makeRandomArr(int size, int bound) {
        int[] arr = new int[size];
        Random rnd = new Random();
        for (int i = 0; i < arr.length; i++) {
            arr[i] = rnd.nextInt(bound);
        }
        return arr;
    }
}
