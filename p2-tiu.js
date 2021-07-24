window.DATA_QUESTION_TIU = (()=>{
	const p_stringTrim = (()=>{
		const reg_newLine = /\n/g;
		const reg_doubleSpace = /\s\s+/g;
		return (s)=>{
			return s.replace(reg_newLine, " ").replace(reg_doubleSpace, " ").trim();
		};
	})();
	const stringQuestions = `HIBRIDA = ...
///Hasil persilangan
///Bibit unggul
///Cepat berubah
///Pembuahan biji
///Penyerbukan
///c 

///KAPITAL = ...
///Kapten
///Rental
///Parlemen 
///Modal
///Restoran
///d

///EKSENTRIK >< ...
///Wajar
///Aneh
///Ganjil
///Gaib
///Irasional
///d

///ELASTIS >< ...
///Lentur
///Taktis
///Ceroboh
///Praktis
///Kaku
///d 

///... : TERANG = SUARA : ...
///Mata - bisu
///Warna - getaran
///Kelam - ramai
///Hitam - sunyi
///Cahaya - nyaring
///d

///LABORAN : PIPET : MIKROSKOP = ...
///Monitor : obeng : mobil
///Guru : kapur : murid
///Penulis : kuas : cat
///Tukang : obat : stetoskop 
///Penari : topi : selendang
///b

///
///Daun singkong
///Kangkung
///Bayam
///Jamur
///Kol
///d 

///
///Semeru
///Slamet
///Merapi 
///Merbabu
///Rinjani
///a 

///
///0
///1
///2
///3
///4
///a

///
///2
///3
///5
///7
///9
///e

///
///1
///4
///6
///8
///9
///a

///Belakangan ini mafia hukum dan mafia pajak sering dibahas. Selain itu, mafia pengadilan, pertambangan, dan narkotika juga disorot. Keadaannya terasa absurd karena perbincangan tentang bahaya mafia hanya menimbulkan kegaduhan dan kebohongan ketimbang menggalang upaya keras untuk mengatasinya. Semua seperti tampak tidak berdaya. Tidak hanya masyarakat yang mengeluh, tetapi juga penjabat pemerintah. Apakah negara kalah menghadapi mafia?<br/><br/>Terdapat kesalahan pada kalimat-kalimat pembentuk paragraph di atas, yaitu...
///Tidak ada tanda koma (,) setelah kata "pertambangan" pada kalimat kedua.
///Seharusnya tidak ada partikel "-nya" pada kata ‘keadaannya’ pada kalimat ketiga.
///Kata "tampak" pada kalimat keempat harusnya diganti dengan kata "nampak".
///Kata penghubung "tetapi" pada kalimat kelima harusnya diganti dengan "melainkan".
///Kata "Apakah" pada kalimat keenam harusnya diganti dengan "Mengapa".
///e
	
///Pemakaian kata ulang yang tepat terdapat pada kalimat...
///Dengan beberapa kali membaca-baca tulisan di papan iklan, secara langsung anak belajar membaca dan memahami isi bacaan.
///Ada banyak surat-surat kabar terbit sehubungan dengan kebebasan pers.
///Mereka berdua saling panggil-memanggil di bandara.
///Sayur-mayur dijual dipasar tradisional yang letaknya tidak jauh dari sini.
///Angin putting beliung telah membuat perkampungan porak-poranda.
///d 
	
///25,23,21,23,21,19,21,19,17,19,...
///17, 25
///17, 23
///17, 21
///17, 15
///17, 13
///d 

///1, 1, 4, 2, 9, 4, 16, ..., ...
///8, 25
///9, 25
///16, 36
///25, 36
///25, 49
///a

///A, C, E, G, I, K, ...
///K, L
///K, M
///M, L
///K, N
///M, O
///e

///R, P, N, L, ...
///J, H
///I, K
///J, I
///L, H
///M, H
///a
		
///... E F I J M N
///A B
///A C
///B D
///A D
///B D
///d
	
///\\(\\frac{2}{1}, \\frac{2}{8}, \\frac{3}{36}, \\frac{4}{80}, ...\\)
///\\(\\frac{5}{241}\\)
///\\(\\frac{5}{242}\\)
///\\(\\frac{5}{243}\\)
///\\(\\frac{5}{244}\\)
///\\(\\frac{5}{245}\\)
///a 

///Jika diketahui \\(a=\\frac{2}{3}b\\),  \\(c=\\frac{3}{2}a\\), dan abc=18, maka nilai b adalah...
///\\(\\frac{1}{3}\\)
///1
///3
///2
///\\(\\frac{2}{3}\\)
///c

///\\(1 - \\frac{1}{10} - \\frac{1}{100} - \\frac{1}{1000} - \\frac{1}{10000}\\) =...
///\\(\\frac{8889}{10000}\\)
///\\(\\frac{8899}{10000}\\)
///\\(\\frac{8989}{10000}\\)
///\\(\\frac{8999}{10000}\\)
///\\(\\frac{8990}{10000}\\)
///a 

///Jika p bilangan yang menyatakan 0,234% dari 3,54; dan q bilangan yang menyatakan 3,51% dari 0,234, maka...
///p = q
///p < q
///p > q
///p \\(\\neq\\) q
///p – q + 0,5
///a

///Diketahui x, y, dan z adalah bilangan bulat positif kurang dari 25 yang tidak habis dibagi 3, tetapi habis dibagi 5. Jika x < y < z, maka nilai dari xz – y adalah...
///65
///85
///90
///135
///185
///d
	
///Jika a + 3 = 6, sedangkan b adalah bilangan bulat negative anatar -9 dan -7, maka 4a + b =...
///3 < 4a + b < 5
///3 \\(\\leqq\\) 4a + b < 5
///4 \\(\\leqq\\) 4a + b < 5
///4 \\(\\leqq\\) 4a + b \\(\\leqq\\) 5
///3 < 4a + b \\(\\leqq\\) 4
///e

///Ayah dan ibu pergi ke rumah nenek dengan mengendarai sepeda montor. Perbandingan kecepatan mereka 6 : 3. Jika selisih waktu yang diperlukan oleh mereka untuk sampai di rumah nenek adalah 24 menit, maka berapa waktu yang dibutuhkan ibu untuk sampai ke rumah nenek!
///14 menit
///24 menit
///36 menit
///56 menit
///60 menit
///a
	
///Rani mempunyai 9 buah manggis, 12 buah jeruk, dan 18 buah semangka. Buah-buahan tersebut akan dibagikan kepada teman-temannya dengan jumlah yang sama. Berapa banyak jeruk yang diterima setiap anak?
///2
///3
///4
///6
///8
///c

///Ayah membersihkan lantai rumah menggunakan air melalui selang dengan debit 90 \\(cm^{3}\\)  selama  \\(1 \\frac{1}{2}\\) jam. Berapa liter air yang digunakan untuk membersihkan lantai rumah tersebut?
///198 liter
///234 liter
///368 liter
///486 liter
///524 liter
///d

///Jika siswa rajin, maka nilai tes akan menduduki rangking tinggi. Rangking nilai tes tinggi dapat meningkatkan rasa bangga. Kesimpulannya adalah...
///Rangking nilai tes Johan tidak tinggi, berarti ia bangga.
///Rasa bangga Johan tidak meningkat, berarti ia rajin belajar.
///Johan rajin belajar, sehingga rasa bangganya meningkat.
///Rangking nilai tes Johan tinggi, namun ia tidak bangga,
///Rasa bangga tidak meningkat, berarti rangking nilai tesnya tinggi.
///e
	
///Jika taman B dipelihara dengan baik, maka taman itu akan bersih dan indah. Taman yang menarik untuk dikunjungi adalah taman yang bersih dan indah. Kesimpulannya adalah...
///Taman B bersih namun tak indah.
///Jikan taman B terpelihara, maka akan menarik pengunjung.
///Taman B terpelihara dan menarik untuk dikunjungi.
///Taman B tidak menarik pengunjung, namun terpelihara.
///Taman B terpelihara, namun tidak menarik untuk dikunjungi.
///d 

///Semua siswa hadir di sekolah pada acara penerimaan siswa didik baru. Acara penerimaan siswa didik baru dilakukan di hari Sabtu. Kesimpulannya adalah...
///Semua siswa hadir di hari Sabtu.
///Tak semua siswa hadir di hari Sabtu.
///Semua siswa lama tak hadir di hari Sabtu.
///Semua siswa baru tak hadir di hari Sabtu.
///Semua siswa tak hadir di hari sabtu.
///d


///<img src='https://1.bp.blogspot.com/-tuAYREbU6ZU/YPyNvf9x2kI/AAAAAAAAC4U/_ZRjqbAyHFs_x9729bc84He8eFz1IttxwCLcBGAsYHQ/s0-rw/soal66.png'/>
///<img src='https://1.bp.blogspot.com/-ZZm88UP_2Pc/YPyNuK9Z0EI/AAAAAAAAC4E/sDvlvPbU1rc0wF1tlZDa3PhHOTHlEc-tQCLcBGAsYHQ/s0-rw/soal66-a.png'/>
///<img src='https://1.bp.blogspot.com/-WNk1xHqp50I/YPyNuOgqGyI/AAAAAAAAC4A/4NdzfMg3zT4BDjYu5cWJyJElX76onpnbQCLcBGAsYHQ/s0-rw/soal66-b.png'/>
///<img src='https://1.bp.blogspot.com/-0DCVRMKmM3s/YPyNuAybuWI/AAAAAAAAC4I/CDZ23ixOHxI_Pki__3adhdRjzBmrdi4OwCLcBGAsYHQ/s0-rw/soal66-c.png'/>
///<img src='https://1.bp.blogspot.com/-JdGOCNRe1yU/YPyNvFXVJeI/AAAAAAAAC4M/3Or6wWzxQlAzmftQcOjusiXdIJq2IvYZQCLcBGAsYHQ/s0-rw/soal66-d.png'/>
///<img src='https://1.bp.blogspot.com/-BSam5WDg2sY/YPyNvcFFnmI/AAAAAAAAC4Q/okg4BODyUeoP-5oAOIXcbkD805DWbTFxACLcBGAsYHQ/s0-rw/soal66-e.png'/>
///d


///<img src='https://1.bp.blogspot.com/-C6aWjI8WDA4/YPyOiCqLEBI/AAAAAAAAC5A/klS73Qz_zZECmLz93wYQ_oUVj5tOfqQtACLcBGAsYHQ/s0-rw/soal67.png'/>
///<img src='https://1.bp.blogspot.com/-5uG4SjMJznM/YPyOhZyimuI/AAAAAAAAC4s/4HBB5DLLQpItFA8atRjPyKMz_vw78YiwQCLcBGAsYHQ/s0-rw/soal67-a.png'/>
///<img src='https://1.bp.blogspot.com/-IaAbzAMG-qE/YPyOhbcHg_I/AAAAAAAAC4w/WaHXBeRJOUMo0eTfbl0AesUcg7ynqXWSwCLcBGAsYHQ/s0-rw/soal67-b.jpg'/>
///<img src='https://1.bp.blogspot.com/-QQK3Js2J6fM/YPyOhph-7hI/AAAAAAAAC40/rRjuBGuCvagY4yCBET4SZpo8xonKGctgACLcBGAsYHQ/s0-rw/soal67-c.png'/>
///<img src='https://1.bp.blogspot.com/-n0rjm7caDNg/YPyOiEOMFHI/AAAAAAAAC44/TdJ-fg3oD4kicQUlwk2UWajbUeMNoda_wCLcBGAsYHQ/s0-rw/soal67-d.png'/>
///<img src='https://1.bp.blogspot.com/-jxaV9hb8CCM/YPyOiKW8u5I/AAAAAAAAC48/9qlJQ-WHDicOM0MAqRmXdjenpl9Ti2qmQCLcBGAsYHQ/s0-rw/soal67-e.png'/>
///b

///
///<img src='https://1.bp.blogspot.com/-4a_Q3tHxVRM/YPyPEJhgBAI/AAAAAAAAC5U/sj0Ahmp0VSs3dnNE_vnjNHFOo8lLPwF9wCLcBGAsYHQ/s0-rw/soal68-a.png'/>
///<img src='https://1.bp.blogspot.com/-cYR4y3c5B3E/YPyPEPYGS0I/AAAAAAAAC5Y/ATpbhxQA75oE4i1SZp9qCdhgbddQVL9oQCLcBGAsYHQ/s0-rw/soal68-b.png'/>
///<img src='https://1.bp.blogspot.com/-PObesig6PS8/YPyPELDQRBI/AAAAAAAAC5Q/bye1HER0X0MBP_wHxTTYQctKKDM-Ve1uwCLcBGAsYHQ/s0-rw/soal68-c.png'/>
///<img src='https://1.bp.blogspot.com/-s5e3k00lzGM/YPyPE_mlfJI/AAAAAAAAC5c/99k7FE3F6kEhY4CWgroXwbYUhTXEUeOJQCLcBGAsYHQ/s0-rw/soal68-d.png'/>
///<img src='https://1.bp.blogspot.com/-lSfJwGtqP4k/YPyPE02_BoI/AAAAAAAAC5g/TWRV27DOFkk4YS_yRxCTniCQ-Rs8XOVhwCLcBGAsYHQ/s0-rw/soal68-e.png'/>
///e

///
///<img src='https://1.bp.blogspot.com/--hhi88YpfUA/YPyPhRz4iyI/AAAAAAAAC54/YxqUlFgw6zw_pL7FCeZj9L2fvt3YVUjOACLcBGAsYHQ/s0-rw/soal69-a.png'/>
///<img src='https://1.bp.blogspot.com/-Y7Fw1WeUt4o/YPyPhYxI8OI/AAAAAAAAC58/cyOqA2ZpKYscFJV5xdVgWexaCXlpDAycgCLcBGAsYHQ/s0-rw/soal69-b.png'/>
///<img src='https://1.bp.blogspot.com/-usO82ZJFSVk/YPyPhUyHhrI/AAAAAAAAC50/JIgXYRaUqbE1aULLTDzuoapsqvr5b7kmACLcBGAsYHQ/s0-rw/soal69-c.png'/>
///<img src='https://1.bp.blogspot.com/-uHfg1LXAkCQ/YPyPh3PBLNI/AAAAAAAAC6A/BFcUmP1tqYQoAzjA2hcFYoGyLLV86L5mgCLcBGAsYHQ/s0-rw/soal69-d.png'/>
///<img src='https://1.bp.blogspot.com/-dUm6S_25D68/YPyPiCsgugI/AAAAAAAAC6E/2fbKyU_en9w0_dK4yZaJuwzUokiS8X1gACLcBGAsYHQ/s0-rw/soal69-e.png'/>
///a

///
///<img src='https://1.bp.blogspot.com/-HZE2-HipTCM/YPyQEX-TZ3I/AAAAAAAAC6Q/2OkCDjwyOdsv10MvzSBcjgvaQcZZcTCQACLcBGAsYHQ/s0-rw/soal70-a.png'/>
///<img src='https://1.bp.blogspot.com/-4jBKy_8dRr4/YPyQEQIpihI/AAAAAAAAC6Y/XXqTctnEh2EVLYJWznq1VYnW46JJ8F2NwCLcBGAsYHQ/s0-rw/soal70-b.png'/>
///<img src='https://1.bp.blogspot.com/-apwoSgVvl08/YPyQETffArI/AAAAAAAAC6U/f7A0P4oGfQc6YO-0YUSBhNG92H5umDS3wCLcBGAsYHQ/s0-rw/soal70-c.png'/>
///<img src='https://1.bp.blogspot.com/-pi8etYEDAb4/YPyQE71x-eI/AAAAAAAAC6c/e459ctaReAcjzxYhKA18S02oDQRLvdliwCLcBGAsYHQ/s0-rw/soal70-d.png'/>
///<img src='https://1.bp.blogspot.com/-Dr6BTF6PFlM/YPyQE0PYqjI/AAAAAAAAC6g/PtYp7yk8_AE4fIDNCuShMLYAq5g7qImZwCLcBGAsYHQ/s0-rw/soal70-e.png'/>
///e`;
	
	const returned = [];
	const arrayStringQuestions = [];
	const pieces = stringQuestions.split("///");
	const alpabetIndex = ["a", "b", "c", "d", "e"];
	const group = "TES INTELEGENSI UMUM";
	const groupAlias = "tiu";
	const len = pieces.length;
	let currentIndex = 0;
	let currentItem;
	for(let i=0;i<len;i++){
		currentIndex += 1;
		const p = p_stringTrim(pieces[i]);
		if(currentIndex===1){
			currentItem = {};
			currentItem.group = group;
			currentItem.groupAlias = groupAlias;
			currentItem.content = p;
		}
		else if(currentIndex < 7){ // index untuk opsi
			if(currentIndex === 2){
				currentItem.option = [];
			}
			currentItem.option.push(p);
		}
		else{ // scores
			currentItem.scores = [];
			for(let sIndex = 0;sIndex < 5;sIndex++){
				if(p.toLowerCase() === alpabetIndex[sIndex]){
					currentItem.scores.push(5);
				}
				else{
					currentItem.scores.push(0);
				}
			}
			returned.push(currentItem);
			currentIndex = 0;
		}
	}


	return returned;
})();

//console.log(window.DATA_QUESTION_TIU);
/* AMBIL KUNCI JAWABAN */
/*
const kunciLabels = ["A", "B", "C", "D", "E"];
const items = window.DATA_QUESTION_TIU;
const len = items.length;
const kunci = [];
for(let i=0;i<len;i++){
	const item = items[i];
	const scores = item.scores;
	for(let j=0;j<5;j++){
		if(scores[j] === 5){
			kunci.push(kunciLabels[j]);
			break;
		}
	}
}

const info = [];
for(let i=0;i<items.length;i++){
	info.push(i + 31 + ". "+ kunci[i]);
}

print(info.join("\n"));
*/