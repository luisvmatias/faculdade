public class T1 {
    static class MyThread extends Thread{
        @Override
        public void run(){
            for (int i = 0; i < 7; i++) {
                System.out.println("thread extendida: " + i);
            }
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }
//Segunda Thread
    static class MyRunnable implements Runnable {
        @Override
        public void run(){
            for (int i = 0; i < 7; i++) {
                System.out.println("thread em execução: " + i);
            }
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }
    public static void main(String[] args) {
        MyThread thread1 = new MyThread();
        thread1.start();

        Thread thread2 = new Thread(new MyRunnable());
        thread2.start();
    }
}