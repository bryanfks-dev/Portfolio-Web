<?php
class Navbar extends Component {
    public function render() {
        $screen_width = "<script>document.write(screen.width)</script>";

        // Is mobile
        if ($screen_width <= 800) {
            return view('partials.mobile_navbar');
        }
        else {
            return view('partials.desktop_navbar');
        }
    }
}
