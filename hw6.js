public class Start {
    public static void main(String[] args) {
        int kol = 0;
        int sum = 0;
        
        for (int i = 2; i < 100; i++) {
            if (i % 2 == 0) {
                kol++;
                sum += i;
            }
        }
        System.out.println("сумма четных чисел: " + sum);
        System.out.println("количество четных чисел: " + kol);
    }
}