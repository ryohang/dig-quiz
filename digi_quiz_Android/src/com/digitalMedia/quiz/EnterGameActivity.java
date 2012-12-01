package com.digitalMedia.quiz;

import com.digitalMedia.quiz.R;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.widget.ImageView;

public class EnterGameActivity extends Activity {

	ImageView firstImage;
	
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_enter_game);
        new Handler().postDelayed(new Runnable() {
			
			public void run() {
				Intent gameOptionsIntent = new Intent(EnterGameActivity.this, QnA_Activity.class);
				startActivity(gameOptionsIntent);
				finish();
			}
		}, 1000);
    }
}
