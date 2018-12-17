function quickSort(array) {
	function sort(arr, left = 0, right = arr.length - 1) {
		if (left >= right) { //如果左边和右边索引相等说明整理完毕
			return;
		}
		const len = arr.length;
		let i = left;
		let j = right;
		let baseValIndex = j; // 基准值索引
        const baseVal = arr[baseValIndex];
        let temp;
		while (i < j) { //把所有比基准值小的数放在左边大的数放在右边
			while (i < len && i < j) {
				if (arr[i] > baseVal) { //找到一个比基准值大的数交换
					temp = arr[i];
					arr[i] = baseVal;
					arr[baseValIndex] = temp;
					baseValIndex = i
					break
				}
				i++
			}
			while (j >= 0 && j > i) { //找到一个比基准值小的数交换
				if (arr[j] < baseVal) {
					temp = arr[j];
					arr[j] = baseVal;
					arr[baseValIndex] = temp;
					baseValIndex = j;
					break
				}
				j--;
			}
		}
		sort(arr, left, baseValIndex - 1); // 将左边的无序数组重复上面的操作
		sort(arr, baseValIndex + 1, right); // 将右边的无序数组重复上面的操作
	}
	const newArr = array.concat(); // 为了保证这个函数是纯函数拷贝一次数组
	sort(newArr);
	return newArr;
}