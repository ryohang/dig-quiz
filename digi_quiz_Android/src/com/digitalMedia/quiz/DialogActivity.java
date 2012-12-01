package com.digitalMedia.quiz;

import com.digitalMedia.quiz.R;

import android.app.Activity;
import android.app.Dialog;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.TextView;

public class DialogActivity extends Activity {
	
	void aboutQuizGameDialog() {
		final Dialog dialog = new Dialog(this);
		dialog.setContentView(R.layout.about_dialog);
		dialog.setTitle("About this Quiz");
		
		TextView aboutText = (TextView) findViewById(R.id.about_text);
		aboutText.setText(R.string.about_quiz_game);
		
		View dialogOKButton = dialog.findViewById(R.id.about_ok_button);
		dialogOKButton.setOnClickListener(new OnClickListener() {
			
			public void onClick(View v) {
				dialog.dismiss();
			}
		});
		
	}
}
